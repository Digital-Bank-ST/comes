import { CreateSupplierCompanyInput } from './create-supplier_company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSupplierCompanyInput extends PartialType(CreateSupplierCompanyInput) {
  @Field(() => Int)
  id: number;
}
