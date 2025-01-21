import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateCriteriaInput {
  @Field(() => Int)
  @IsNotEmpty()
  id_type_criteria: number;

  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  standard: string;
}