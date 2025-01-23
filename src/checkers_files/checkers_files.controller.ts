import { Controller, Post, UseInterceptors, UploadedFile, Body, Get, Param, Patch, Delete, NotFoundException, Res, StreamableFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CheckersFilesService } from './checkers_files.service';
import { CreateCheckersFilesInput } from './dto/create-checkers_files.input';
import { UpdateCheckersFilesInput } from './dto/update-checkers_files.input';
import { CheckersFiles } from './entities/checkers_files.entity';
import { Express, Response } from 'express';

@Controller('checkers-files')
export class CheckersFilesController {
  constructor(private readonly checkersFilesService: CheckersFilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createCheckersFilesInput: CreateCheckersFilesInput,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CheckersFiles> {
    return this.checkersFilesService.create(createCheckersFilesInput, file);
  }

  @Get()
  findAll(): Promise<CheckersFiles[]> {
    return this.checkersFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CheckersFiles> {
    return this.checkersFilesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: number,
    @Body() updateCheckersFilesInput: UpdateCheckersFilesInput,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<CheckersFiles> {
    return this.checkersFilesService.update(id, updateCheckersFilesInput, file);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<{ id: number }> {
    return this.checkersFilesService.remove(id);
  }

  @Get('download/:id')
  async downloadFile(@Param('id') id: number, @Res() res: Response) : Promise<StreamableFile>  {
    const checkersFile = await this.checkersFilesService.findOne(id);
    if (!checkersFile) {
      throw new NotFoundException('File not found');
    }

    const fileKey = checkersFile.url.split('.com/')[1];    
    const fileStream = await this.checkersFilesService.downloadFileFromS3(fileKey);
    console.log(new StreamableFile(fileStream, {
        type: 'application/octet-stream',
        disposition: `attachment; filename="${fileKey.split('/').pop()}"`,
      }));
    return new StreamableFile(fileStream, {
        type: 'application/octet-stream',
        disposition: `attachment; filename="${fileKey.split('/').pop()}"`,
      });
  }
  @Get('download2/:id')
  async downloadFile2(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const checkersFile = await this.checkersFilesService.findOne(id);
    if (!checkersFile) {
      throw new NotFoundException('File not found');
    }

    const fileKey = checkersFile.url.split('.com/')[1];
    const fileStream = await this.checkersFilesService.downloadFileFromS3(fileKey);

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${fileKey.split('/').pop()}"`);

    const streamableFile = new StreamableFile(fileStream);
    streamableFile.getStream().pipe(res);
  }
  
}