import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierSubcategory } from './entities/supplier_subcategory.entity';
import { SupplierSubcategoryService } from './supplier_subcategory.service';
import { SupplierSubcategoryResolver } from './supplier_subcategory.resolver';
import { SuppliersModule } from 'src/suppliers/suppliers.module';
import { SubcategoryModule } from 'src/subcategory/subcategory.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierSubcategory]),
    SuppliersModule,
    SubcategoryModule,
    CategoryModule,
  ],
  providers: [SupplierSubcategoryService, SupplierSubcategoryResolver],
  exports: [SupplierSubcategoryService],
})
export class SupplierSubcategoryModule {}