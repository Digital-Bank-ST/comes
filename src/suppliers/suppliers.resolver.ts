import { Resolver, Query, Mutation, Args, Int, ObjectType, Field } from '@nestjs/graphql';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './supplier.entity';
import { CreateSupplierInput } from './dto/create-supplier.input';
import { UpdateSupplierInput } from './dto/update-supplier.input';

@ObjectType()
class SupplierPagination {
  @Field(() => [Supplier])
  data: Supplier[];

  @Field(() => Int)
  count: number;
}

@Resolver(() => Supplier)
export class SuppliersResolver {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Mutation(() => Supplier)
  createSupplier(@Args('createSupplierInput') createSupplierInput: CreateSupplierInput) {
    return this.suppliersService.create(createSupplierInput);
  }

  @Query(() => [Supplier], { name: 'suppliers' })
  findAll() {
    return this.suppliersService.findAll();
  }

  @Query(() => Supplier, { name: 'supplier' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.suppliersService.findOne(id);
  }

  @Mutation(() => Supplier)
  updateSupplier(@Args('updateSupplierInput') updateSupplierInput: UpdateSupplierInput) {
    return this.suppliersService.update(updateSupplierInput.id_supplier, updateSupplierInput);
  }

  @Mutation(() => Int)
  removeSupplier(@Args('id', { type: () => Int }) id: number) {
    return this.suppliersService.remove(id).then(result => result.id);
  }

  @Query(() => SupplierPagination, { name: 'suppliersWithPagination' })
  findWithPagination(
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('field', { type: () => String }) field: string,
    @Args('order', { type: () => String }) order: 'ASC' | 'DESC',
    @Args('q', { type: () => String, nullable: true }) q: string,
  ) {
    return this.suppliersService.findWithPagination(take, skip, field, order, q);
  }
}