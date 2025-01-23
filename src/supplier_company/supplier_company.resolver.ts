import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupplierCompanyService } from './supplier_company.service';
import { SupplierCompany } from './entities/supplier_company.entity';
import { CreateSupplierCompanyInput } from './dto/create-supplier_company.input';
import { UpdateSupplierCompanyInput } from './dto/update-supplier_company.input';

@Resolver(() => SupplierCompany)
export class SupplierCompanyResolver {
  constructor(private readonly supplierCompanyService: SupplierCompanyService) {}

  @Mutation(() => SupplierCompany)
  createSupplierCompany(@Args('createSupplierCompanyInput') createSupplierCompanyInput: CreateSupplierCompanyInput) {
    return this.supplierCompanyService.create(createSupplierCompanyInput);
  }

  @Query(() => [SupplierCompany], { name: 'supplierCompany' })
  findAll() {
    return this.supplierCompanyService.findAll();
  }

  @Query(() => SupplierCompany, { name: 'supplierCompany' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supplierCompanyService.findOne(id);
  }

  @Mutation(() => SupplierCompany)
  updateSupplierCompany(@Args('updateSupplierCompanyInput') updateSupplierCompanyInput: UpdateSupplierCompanyInput) {
    return this.supplierCompanyService.update(updateSupplierCompanyInput.id, updateSupplierCompanyInput);
  }

  @Mutation(() => SupplierCompany)
  removeSupplierCompany(@Args('id', { type: () => Int }) id: number) {
    return this.supplierCompanyService.remove(id);
  }
}
