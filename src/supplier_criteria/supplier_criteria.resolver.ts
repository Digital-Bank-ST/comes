import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SupplierCriteriaService } from './supplier_criteria.service';
import { SupplierCriteria } from './entities/supplier_criteria.entity';
import { CreateSupplierCriteriaInput } from './dto/create-supplier_criteria.input';
import { UpdateSupplierCriteriaInput } from './dto/update-supplier_criteria.input';

@Resolver(() => SupplierCriteria)
export class SupplierCriteriaResolver {
  constructor(private readonly supplierCriteriaService: SupplierCriteriaService) {}

  @Mutation(() => SupplierCriteria)
  createSupplierCriteria(@Args('createSupplierCriteriaInput') createSupplierCriteriaInput: CreateSupplierCriteriaInput) {
    return this.supplierCriteriaService.create(createSupplierCriteriaInput);
  }

  @Query(() => [SupplierCriteria], { name: 'supplierCriterias' })
  findAll() {
    return this.supplierCriteriaService.findAll();
  }

  @Query(() => SupplierCriteria, { name: 'supplierCriteria' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.supplierCriteriaService.findOne(id);
  }

  @Mutation(() => SupplierCriteria)
  updateSupplierCriteria(@Args('updateSupplierCriteriaInput') updateSupplierCriteriaInput: UpdateSupplierCriteriaInput) {
    return this.supplierCriteriaService.update(updateSupplierCriteriaInput.id_supplier_criteria, updateSupplierCriteriaInput);
  }

  @Mutation(() => Int)
  async removeSupplierCriteria(@Args('id', { type: () => Int }) id: number) {
    const result_1 = await this.supplierCriteriaService.remove(id);
    return result_1;
  }
}