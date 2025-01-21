import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateTypeCriteriaInput } from './create-type_criteria.input';

@InputType()
export class UpdateTypeCriteriaInput extends PartialType(CreateTypeCriteriaInput) {
  @Field(() => Int)
  id_type_criteria: number;

}