import { Module } from '@nestjs/common';
import { SupplierCompanyService } from './supplier_company.service';
import { SupplierCompanyResolver } from './supplier_company.resolver';

@Module({
  providers: [SupplierCompanyResolver, SupplierCompanyService],
})
export class SupplierCompanyModule {}
