import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeCriteria } from './entities/type_criteria.entity';
import { CreateTypeCriteriaInput } from './dto/create-type_criteria.input';
import { UpdateTypeCriteriaInput } from './dto/update-type_criteria.input';

@Injectable()
export class TypeCriteriaService {
  constructor(
    @InjectRepository(TypeCriteria)
    private typeCriteriaRepository: Repository<TypeCriteria>,
  ) {}

  create(createTypeCriteriaInput: CreateTypeCriteriaInput): Promise<TypeCriteria> {
    const newTypeCriteria = this.typeCriteriaRepository.create(createTypeCriteriaInput);
    return this.typeCriteriaRepository.save(newTypeCriteria);
  }

  findAll(): Promise<TypeCriteria[]> {
    return this.typeCriteriaRepository.find();
  }

  findOne(id_type_criteria: number): Promise<TypeCriteria> {
    return this.typeCriteriaRepository.findOne({
      where: { id_type_criteria },
    });
  }

  async update(id_type_criteria: number, updateTypeCriteriaInput: UpdateTypeCriteriaInput): Promise<TypeCriteria> {
    await this.typeCriteriaRepository.update(id_type_criteria, updateTypeCriteriaInput);
    return this.findOne(id_type_criteria);
  }

  async remove(id_type_criteria: number): Promise<{ id_type_criteria: number }> {
    const typeCriteria = await this.findOne(id_type_criteria);
    if (!typeCriteria) {
      throw new Error('TypeCriteria not found');
    }
    await this.typeCriteriaRepository.remove(typeCriteria);
    return { id_type_criteria };
  }
}