import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierCriteria } from './entities/supplier_criteria.entity';
import { SupplierCriteriaService } from './supplier_criteria.service';
import { SupplierCriteriaResolver } from './supplier_criteria.resolver';
import { CriteriaModule } from 'src/criteria/criteria.module';
import { ComplianceLevelModule } from 'src/compliance_level/compliance_level.module';
import { SuppliersModule } from 'src/suppliers/suppliers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierCriteria]),
    CriteriaModule,
    ComplianceLevelModule,
    SuppliersModule,
  ],
  providers: [SupplierCriteriaService, SupplierCriteriaResolver],
  exports: [SupplierCriteriaService],
})
export class SupplierCriteriaModule {}