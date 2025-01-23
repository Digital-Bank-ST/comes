import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierCriteria } from './entities/supplier_criteria.entity';
import { CreateSupplierCriteriaInput } from './dto/create-supplier_criteria.input';
import { UpdateSupplierCriteriaInput } from './dto/update-supplier_criteria.input';

@Injectable()
export class SupplierCriteriaService {
  constructor(
    @InjectRepository(SupplierCriteria)
    private supplierCriteriaRepository: Repository<SupplierCriteria>,
  ) {}

  create(createSupplierCriteriaInput: CreateSupplierCriteriaInput): Promise<SupplierCriteria> {
    const newSupplierCriteria = this.supplierCriteriaRepository.create(createSupplierCriteriaInput);
    return this.supplierCriteriaRepository.save(newSupplierCriteria);
  }

  findAll(): Promise<SupplierCriteria[]> {
    return this.supplierCriteriaRepository.find();
  }

  findOne(id: number): Promise<SupplierCriteria> {
    return this.supplierCriteriaRepository.findOne({
      where: { id_supplier_criteria: id },
    });
  }

  async update(id: number, updateSupplierCriteriaInput: UpdateSupplierCriteriaInput): Promise<SupplierCriteria> {
    await this.supplierCriteriaRepository.update(id, updateSupplierCriteriaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const supplierCriteria = await this.findOne(id);
    if (!supplierCriteria) {
      throw new Error('SupplierCriteria not found');
    }
    await this.supplierCriteriaRepository.remove(supplierCriteria);
    return { id };
  }
}