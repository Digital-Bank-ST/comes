import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupplierSubcategoryService } from './supplier_subcategory.service';
import { SupplierSubcategory } from './entities/supplier_subcategory.entity';
import { CreateSupplierSubcategoryInput } from './dto/create-supplier_subcategory.input';
import { UpdateSupplierSubcategoryInput } from './dto/update-supplier_subcategory.input';

@Resolver(() => SupplierSubcategory)
export class SupplierSubcategoryResolver {
  constructor(private readonly supplierSubcategoryService: SupplierSubcategoryService) {}

  @Mutation(() => SupplierSubcategory)
  createSupplierSubcategory(@Args('createSupplierSubcategoryInput') createSupplierSubcategoryInput: CreateSupplierSubcategoryInput) {
    return this.supplierSubcategoryService.create(createSupplierSubcategoryInput);
  }

  @Query(() => [SupplierSubcategory], { name: 'supplierSubcategories' })
  findAll() {
    return this.supplierSubcategoryService.findAll();
  }

  @Query(() => SupplierSubcategory, { name: 'supplierSubcategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supplierSubcategoryService.findOne(id);
  }

  @Mutation(() => SupplierSubcategory)
  updateSupplierSubcategory(@Args('updateSupplierSubcategoryInput') updateSupplierSubcategoryInput: UpdateSupplierSubcategoryInput) {
    return this.supplierSubcategoryService.update(updateSupplierSubcategoryInput.id_supplier_subcategory, updateSupplierSubcategoryInput);
  }

  @Mutation(() => Int)
  removeSupplierSubcategory(@Args('id', { type: () => Int }) id: number) {
    return this.supplierSubcategoryService.remove(id).then(result => result.id);
  }
}