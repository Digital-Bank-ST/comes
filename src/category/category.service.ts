import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: ['categoryType'] });
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ['categoryType'],
    });
  }

  // async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
  //   const newCategory = this.categoryRepository.create(createCategoryInput);
  //   return this.categoryRepository.save(newCategory);
  // }

  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const categoryType = await this.categoryRepository.findOne({
      where: { id: createCategoryInput.categoryTypeId },
    });

    if (!categoryType) {
      throw new Error('CategoryType not found');
    }

    const newCategory = this.categoryRepository.create({
      ...createCategoryInput,
      categoryType,
    });

    return this.categoryRepository.save(newCategory);
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput): Promise<Category> {
    await this.categoryRepository.update(id, updateCategoryInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const category = await this.findOne(id);
    if (!category) {
      throw new Error('Category not found');
    }
    await this.categoryRepository.remove(category);
    return { id };
  }
}