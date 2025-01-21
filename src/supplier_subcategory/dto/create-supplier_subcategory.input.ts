import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSupplierSubcategoryInput {

  @Field(() => Int)
  @IsNotEmpty()
  id_category: number;

  @Field(() => Int)
  @IsNotEmpty()
  id_subcategory: number;

  @Field(() => Int)
  @IsNotEmpty()
  id_supplier: number;
}