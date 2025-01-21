import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComplianceLevelService } from './compliance_level.service';
import { ComplianceLevel } from './entities/compliance_level.entity';
import { CreateComplianceLevelInput } from './dto/create-compliance_level.input';
import { UpdateComplianceLevelInput } from './dto/update-compliance_level.input';

@Resolver(() => ComplianceLevel)
export class ComplianceLevelResolver {
  constructor(private readonly complianceLevelService: ComplianceLevelService) {}

  @Mutation(() => ComplianceLevel)
  createComplianceLevel(@Args('createComplianceLevelInput') createComplianceLevelInput: CreateComplianceLevelInput) {
    return this.complianceLevelService.create(createComplianceLevelInput);
  }

  @Query(() => [ComplianceLevel], { name: 'complianceLevels' })
  findAll() {
    return this.complianceLevelService.findAll();
  }

  @Query(() => ComplianceLevel, { name: 'complianceLevel' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.complianceLevelService.findOne(id);
  }

  @Mutation(() => ComplianceLevel)
  updateComplianceLevel(@Args('updateComplianceLevelInput') updateComplianceLevelInput: UpdateComplianceLevelInput) {
    return this.complianceLevelService.update(updateComplianceLevelInput.id_compliance_level, updateComplianceLevelInput);
  }

  @Mutation(() => Int)
  removeComplianceLevel(@Args('id', { type: () => Int }) id: number) {
    return this.complianceLevelService.remove(id).then(result => result.id_compliance_level);
  }
}