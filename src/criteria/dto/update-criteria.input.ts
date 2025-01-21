import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateCriteriaInput } from './create-criteria.input';

@InputType()
export class UpdateCriteriaInput extends PartialType(CreateCriteriaInput) {
  @Field(() => Int)
  id_criteria: number;
}