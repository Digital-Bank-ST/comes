import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @MaxLength(50)
  @IsNotEmpty()
  @Field()
  category: string;

  @IsNotEmpty()
  @Field(() => Int)
  categoryTypeId: number;
}