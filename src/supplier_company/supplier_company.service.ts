import { Injectable } from '@nestjs/common';
import { CreateSupplierCompanyInput } from './dto/create-supplier_company.input';
import { UpdateSupplierCompanyInput } from './dto/update-supplier_company.input';

@Injectable()
export class SupplierCompanyService {
  create(createSupplierCompanyInput: CreateSupplierCompanyInput) {
    return 'This action adds a new supplierCompany';
  }

  findAll() {
    return `This action returns all supplierCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supplierCompany`;
  }

  update(id: number, updateSupplierCompanyInput: UpdateSupplierCompanyInput) {
    return `This action updates a #${id} supplierCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplierCompany`;
  }
}
