import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckersFiles } from './entities/checkers_files.entity';
import { SupplierCriteriaService } from '../supplier_criteria/supplier_criteria.service';
import { CreateCheckersFilesInput } from './dto/create-checkers_files.input';
import { UpdateCheckersFilesInput } from './dto/update-checkers_files.input';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
// import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv';
import { Express } from 'express';
import * as https from 'https';
import { NodeHttpHandler } from '@aws-sdk/node-http-handler';
import { Readable } from 'stream';

dotenv.config();

@Injectable()
export class CheckersFilesService {
  private s3Client: S3Client;
  private bucketName: string;

  constructor(
    @InjectRepository(CheckersFiles)
    private checkersFilesRepository: Repository<CheckersFiles>,
    private readonly supplierCriteriaService: SupplierCriteriaService,
  ) {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: process.env.NODE_ENV !== 'development',
    });
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      requestHandler: new NodeHttpHandler({
        httpsAgent,
      }),
    });
    this.bucketName = process.env.AWS_S3_BUCKET_NAME;
  }

  async uploadFileToS3(file: Express.Multer.File, folderName: string): Promise<string> {
    // const fileKey = `${folderName}/${uuidv4()}-${file.originalname}`;
    const fileKey = `${folderName}/${file.originalname}`;
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3Client.send(command);
    return `https://${this.bucketName}.s3.amazonaws.com/${fileKey}`;
  }

  async create(createCheckersFilesInput: CreateCheckersFilesInput, file: Express.Multer.File): Promise<CheckersFiles> {

    const supplierCriteria = await this.supplierCriteriaService.findOne(createCheckersFilesInput.id_supplier_criteria);

    if (!supplierCriteria) {
      throw new NotFoundException('Supplier criteria not found');
    }
    const folderName = `${supplierCriteria.id_supplier}/${supplierCriteria.id_criteria}`;
    const url = await this.uploadFileToS3(file, folderName);
    const newCheckersFile = this.checkersFilesRepository.create({ ...createCheckersFilesInput, url });
    return this.checkersFilesRepository.save(newCheckersFile);
  }

  findAll(): Promise<CheckersFiles[]> {
    return this.checkersFilesRepository.find();
  }

  findOne(id: number): Promise<CheckersFiles> {
    return this.checkersFilesRepository.findOne({
      where: { id_checkerfiles: id },
    });
  }

  async update(id: number, updateCheckersFilesInput: UpdateCheckersFilesInput, file?: Express.Multer.File): Promise<CheckersFiles> {
    if (file) {
      const url = await this.uploadFileToS3(file, updateCheckersFilesInput.folder_name);
      updateCheckersFilesInput.url = url;
    }
    await this.checkersFilesRepository.update(id, updateCheckersFilesInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const checkersFile = await this.findOne(id);
    if (!checkersFile) {
      throw new Error('CheckersFile not found');
    }
    await this.checkersFilesRepository.remove(checkersFile);
    return { id };
  }

  async downloadFileFromS3(fileKey: string): Promise<Readable> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    const response = await this.s3Client.send(command);    
    const fileStream = response.Body as Readable;    
    return fileStream;
  }
}