import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupplierSubcategory } from './entities/supplier_subcategory.entity';
import { CreateSupplierSubcategoryInput } from './dto/create-supplier_subcategory.input';
import { UpdateSupplierSubcategoryInput } from './dto/update-supplier_subcategory.input';

@Injectable()
export class SupplierSubcategoryService {
  constructor(
    @InjectRepository(SupplierSubcategory)
    private supplierSubcategoryRepository: Repository<SupplierSubcategory>,
  ) {}

  create(createSupplierSubcategoryInput: CreateSupplierSubcategoryInput): Promise<SupplierSubcategory> {
    const newSupplierSubcategory = this.supplierSubcategoryRepository.create(createSupplierSubcategoryInput);
    return this.supplierSubcategoryRepository.save(newSupplierSubcategory);
  }

  findAll(): Promise<SupplierSubcategory[]> {
    return this.supplierSubcategoryRepository.find();
  }

  findOne(id: number): Promise<SupplierSubcategory> {
    return this.supplierSubcategoryRepository.findOne({
      where: { id_supplier_subcategory: id },
    });
  }

  async update(id: number, updateSupplierSubcategoryInput: UpdateSupplierSubcategoryInput): Promise<SupplierSubcategory> {
    await this.supplierSubcategoryRepository.update(id, updateSupplierSubcategoryInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const supplierSubcategory = await this.findOne(id);
    if (!supplierSubcategory) {
      throw new Error('SupplierSubcategory not found');
    }
    await this.supplierSubcategoryRepository.remove(supplierSubcategory);
    return { id };
  }
}