import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class UpdateSubcategoryInput {
  @Field(() => Int)
  id_subcategory: number;

  @MaxLength(100)
  @IsOptional()
  @Field({ nullable: true })
  subcategory?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_category?: number;
}