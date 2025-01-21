import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplianceLevel } from './entities/compliance_level.entity';
import { CreateComplianceLevelInput } from './dto/create-compliance_level.input';
import { UpdateComplianceLevelInput } from './dto/update-compliance_level.input';

@Injectable()
export class ComplianceLevelService {
  constructor(
    @InjectRepository(ComplianceLevel)
    private complianceLevelRepository: Repository<ComplianceLevel>,
  ) {}

  create(createComplianceLevelInput: CreateComplianceLevelInput): Promise<ComplianceLevel> {
    const newComplianceLevel = this.complianceLevelRepository.create(createComplianceLevelInput);
    return this.complianceLevelRepository.save(newComplianceLevel);
  }

  findAll(): Promise<ComplianceLevel[]> {
    return this.complianceLevelRepository.find();
  }

  findOne(id: number): Promise<ComplianceLevel> {
    return this.complianceLevelRepository.findOne({
      where: { id_compliance_level: id },
    });
  }

  // async update(id: number, updateComplianceLevelInput: UpdateComplianceLevelInput): Promise<ComplianceLevel> {
  //     await this.complianceLevelRepository.update(id, updateComplianceLevelInput);
  //     return this.findOne(id);
  // }

  update(id: number, updateComplianceLevelInput: UpdateComplianceLevelInput) {
    return this.complianceLevelRepository.update(id, updateComplianceLevelInput).then(() => {
      return this.findOne(id);
    });
  }

  async remove(id: number): Promise<{ id_compliance_level: number }> {
    const complianceLevel = await this.findOne(id);
    if (!complianceLevel) {
      throw new Error('Compliance Level not found');
    }
    await this.complianceLevelRepository.remove(complianceLevel);
    return { id_compliance_level: id };
  }
}