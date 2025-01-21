import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryType } from './entities/category_type.entity';

@Injectable()
export class CategoryTypeService {
  constructor(
    @InjectRepository(CategoryType)
    private categoryTypeRepository: Repository<CategoryType>,
  ) {}

  findAll(): Promise<CategoryType[]> {
    return this.categoryTypeRepository.find();
  }

  findOne(id: number): Promise<CategoryType> {
    return this.categoryTypeRepository.findOneBy({ id });
  }

  async create(name: string): Promise<CategoryType> {
    const categoryType = this.categoryTypeRepository.create({ name });
    return this.categoryTypeRepository.save(categoryType);
  }
}