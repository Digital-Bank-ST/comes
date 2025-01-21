import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaInput } from './dto/create-criteria.input';
import { UpdateCriteriaInput } from './dto/update-criteria.input';

@Injectable()
export class CriteriaService {
  constructor(
    @InjectRepository(Criteria)
    private criteriaRepository: Repository<Criteria>,
  ) {}

  create(createCriteriaInput: CreateCriteriaInput): Promise<Criteria> {
    const newCriteria = this.criteriaRepository.create(createCriteriaInput);
    return this.criteriaRepository.save(newCriteria);
  }

  findAll(): Promise<Criteria[]> {
    return this.criteriaRepository.find();
  }

  findOne(id_criteria: number): Promise<Criteria> {
    return this.criteriaRepository.findOne({
      where: { id_criteria },
    });
  }

  async update(id: number, updateCriteriaInput: UpdateCriteriaInput): Promise<Criteria> {
    await this.criteriaRepository.update(id, updateCriteriaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id_criteria: number }> {
    const criteria = await this.findOne(id);
    if (!criteria) {
      throw new Error('Criteria not found');
    }
    await this.criteriaRepository.remove(criteria);
    return { id_criteria: id };
  }
}