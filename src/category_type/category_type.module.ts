import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryType } from './entities/category_type.entity';
import { CategoryTypeService } from './category_type.service';
import { CategoryTypeResolver } from './category_type.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryType])],
  providers: [CategoryTypeService, CategoryTypeResolver],
})
export class CategoryTypeModule {}