import { CreateCategoryTypeInput } from './create-category_type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryTypeInput extends PartialType(CreateCategoryTypeInput) {
  @Field(() => Int)
  id: number;
}
