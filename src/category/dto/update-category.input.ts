import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field(() => Int)
  id: number;

  @MaxLength(50)
  @IsOptional()
  @Field({ nullable: true })
  category?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  categoryTypeId?: number;
}