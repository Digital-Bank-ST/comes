import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateSupplierInput } from './create-supplier.input';

@InputType()
export class UpdateSupplierInput extends PartialType(CreateSupplierInput) {
  @Field(() => Int)
  id_supplier: number;
}