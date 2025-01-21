import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
