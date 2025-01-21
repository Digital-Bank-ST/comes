import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeCriteria } from './entities/type_criteria.entity';
import { TypeCriteriaService } from './type_criteria.service';
import { TypeCriteriaResolver } from './type_criteria.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TypeCriteria])],
  providers: [TypeCriteriaService, TypeCriteriaResolver],
  exports: [TypeCriteriaService],
})
export class TypeCriteriaModule {}