import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const newCompany = this.companyRepository.create(createCompanyInput);
    return this.companyRepository.save(newCompany);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.companyRepository.findOne({ where: { id_company: id } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(id: number, updateCompanyInput: UpdateCompanyInput): Promise<Company> {
    const company = await this.companyRepository.preload({
      id_company: id,
      ...updateCompanyInput,
    });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return this.companyRepository.save(company);
  }

  async remove(id: number): Promise<Company> {
    const company = await this.findOne(id);
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return this.companyRepository.remove(company);
  }
}