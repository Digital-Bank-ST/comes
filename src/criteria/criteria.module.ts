import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Criteria } from './entities/criteria.entity';
import { CriteriaService } from './criteria.service';
import { CriteriaResolver } from './criteria.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Criteria])],
  providers: [CriteriaService, CriteriaResolver],
  exports: [CriteriaService],
})
export class CriteriaModule {}