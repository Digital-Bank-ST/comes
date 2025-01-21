import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComplianceLevel } from './entities/compliance_level.entity';
import { ComplianceLevelService } from './compliance_level.service';
import { ComplianceLevelResolver } from './compliance_level.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ComplianceLevel])],
  providers: [ComplianceLevelService, ComplianceLevelResolver],
  exports: [ComplianceLevelService],
})
export class ComplianceLevelModule {}