import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryResolver } from './subcategory.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory])],
  providers: [SubcategoryService, SubcategoryResolver],
  exports: [SubcategoryService,TypeOrmModule],
})
export class SubcategoryModule {}