import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateTypeCriteriaInput {
  @MaxLength(50)
  @IsNotEmpty()
  @Field()
  type: string;
}