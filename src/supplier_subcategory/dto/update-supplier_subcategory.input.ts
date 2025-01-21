import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateSupplierSubcategoryInput {
  @Field(() => Int)
  id_supplier_subcategory: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_category?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_subcategory?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_supplier?: number;
}