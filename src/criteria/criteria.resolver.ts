import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CriteriaService } from './criteria.service';
import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaInput } from './dto/create-criteria.input';
import { UpdateCriteriaInput } from './dto/update-criteria.input';

@Resolver(() => Criteria)
export class CriteriaResolver {
  constructor(private readonly criteriaService: CriteriaService) {}

  @Mutation(() => Criteria)
  createCriteria(@Args('createCriteriaInput') createCriteriaInput: CreateCriteriaInput) {
    return this.criteriaService.create(createCriteriaInput);
  }

  @Query(() => [Criteria], { name: 'criteria' })
  findAll() {
    return this.criteriaService.findAll();
  }

  @Query(() => Criteria, { name: 'criteriaById' })
  findOne(@Args('id_criteria', { type: () => Int }) id_criteria: number) {
    return this.criteriaService.findOne(id_criteria);
  }

  @Mutation(() => Criteria)
  updateCriteria(
  @Args('updateCriteriaInput') updateCriteriaInput: UpdateCriteriaInput
  ) {
    return this.criteriaService.update(updateCriteriaInput.id_criteria, updateCriteriaInput);
  }

  @Mutation(() => Int)
  removeCriteria(@Args('id_criteria', { type: () => Int }) id_criteria: number) {
    return this.criteriaService.remove(id_criteria).then(result => result.id_criteria);
  }
}