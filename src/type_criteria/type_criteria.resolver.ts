import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeCriteriaService } from './type_criteria.service';
import { TypeCriteria } from './entities/type_criteria.entity';
import { CreateTypeCriteriaInput } from './dto/create-type_criteria.input';
import { UpdateTypeCriteriaInput } from './dto/update-type_criteria.input';

@Resolver(() => TypeCriteria)
export class TypeCriteriaResolver {
  constructor(private readonly typeCriteriaService: TypeCriteriaService) {}

  @Mutation(() => TypeCriteria)
  createTypeCriteria(@Args('createTypeCriteriaInput') createTypeCriteriaInput: CreateTypeCriteriaInput) {
    return this.typeCriteriaService.create(createTypeCriteriaInput);
  }

  @Query(() => [TypeCriteria], { name: 'typeCriterias' })
  findAll() {
    return this.typeCriteriaService.findAll();
  }

  @Query(() => TypeCriteria, { name: 'typeCriteria' })
  findOne(@Args('id_type_criteria', { type: () => Int }) id_type_criteria: number) {
    return this.typeCriteriaService.findOne(id_type_criteria);
  }

  @Mutation(() => TypeCriteria)
  updateTypeCriteria(@Args('updateTypeCriteriaInput') updateTypeCriteriaInput: UpdateTypeCriteriaInput) {
    return this.typeCriteriaService.update(updateTypeCriteriaInput.id_type_criteria, updateTypeCriteriaInput);
  }

  @Mutation(() => Int)
  removeTypeCriteria(@Args('id_type_criteria', { type: () => Int }) id_type_criteria: number) {
    return this.typeCriteriaService.remove(id_type_criteria).then(result => result.id_type_criteria);
  }
}