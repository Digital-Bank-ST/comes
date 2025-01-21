import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private subcategoryRepository: Repository<Subcategory>,
  ) {}

  create(createSubcategoryInput: CreateSubcategoryInput): Promise<Subcategory> {
    const newSubcategory = this.subcategoryRepository.create(createSubcategoryInput);
    return this.subcategoryRepository.save(newSubcategory);
  }

  findAll(): Promise<Subcategory[]> {
    return this.subcategoryRepository.find({ relations: ['category'] });
  }

  findOne(id: number): Promise<Subcategory> {
    return this.subcategoryRepository.findOne({
      where: { id_subcategory: id },
      relations: ['category'],
    });
  }

  async update(id: number, updateSubcategoryInput: UpdateSubcategoryInput): Promise<Subcategory> {
    await this.subcategoryRepository.update(id, updateSubcategoryInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const subcategory = await this.findOne(id);
    if (!subcategory) {
      throw new Error('Subcategory not found');
    }
    await this.subcategoryRepository.remove(subcategory);
    return { id };
  }
}