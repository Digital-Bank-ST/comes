import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Supplier } from './supplier.entity';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  async create(createSupplierInput: CreateSupplierInput): Promise<Supplier> {

    const existingSupplier = await this.supplierRepository.findOne({
      where: { rut: createSupplierInput.rut },
    });
    if (existingSupplier) {
      throw new ConflictException('A supplier with this RUT already exists');
    }
    const newSupplier = this.supplierRepository.create(createSupplierInput);
    return this.supplierRepository.save(newSupplier);
  }

  findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

  findOne(id: number): Promise<Supplier> {
    return this.supplierRepository.findOne({
      where: { id_supplier: id },
    });
  }

  async update(id: number, updateSupplierInput: UpdateSupplierInput): Promise<Supplier> {
    await this.supplierRepository.update(id, updateSupplierInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const supplier = await this.findOne(id);
    if (!supplier) {
      throw new Error('Supplier not found');
    }
    await this.supplierRepository.remove(supplier);
    return { id };
  }

  async findWithPagination(take: number, skip: number, field: string, order: 'ASC' | 'DESC', q: string): Promise<{ data: Supplier[], count: number }> {
    const [data, count] = await this.supplierRepository.findAndCount({
      where: q ? { business_name: Like(`%${q}%`) } : {},
      order: { [field]: order },
      take,
      skip,
    });
    return { data, count };
  }
}