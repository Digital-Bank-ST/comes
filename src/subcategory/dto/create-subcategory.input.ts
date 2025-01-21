import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateSubcategoryInput {
  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  subcategory: string;

  @IsNotEmpty()
  @Field(() => Int)
  id_category: number;
}