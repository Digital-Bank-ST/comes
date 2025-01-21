import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { CategoryType } from 'src/category_type/entities/category_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryType])],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}