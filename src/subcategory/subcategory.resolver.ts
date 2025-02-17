import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubcategoryService } from './subcategory.service';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { CreateSubcategoryInput } from './dto/create-subcategory.input';
import { UpdateSubcategoryInput } from './dto/update-subcategory.input';

@Resolver(() => Subcategory)
export class SubcategoryResolver {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Mutation(() => Subcategory)
  createSubcategory(@Args('createSubcategoryInput') createSubcategoryInput: CreateSubcategoryInput) {
    return this.subcategoryService.create(createSubcategoryInput);
  }

  @Query(() => [Subcategory], { name: 'subcategories' })
  findAll() {
    return this.subcategoryService.findAll();
  }

  @Query(() => Subcategory, { name: 'subcategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoryService.findOne(id);
  }

  @Mutation(() => Subcategory)
  updateSubcategory(@Args('updateSubcategoryInput') updateSubcategoryInput: UpdateSubcategoryInput) {
    return this.subcategoryService.update(updateSubcategoryInput.id_subcategory, updateSubcategoryInput);
  }

  @Mutation(() => Int)
  removeSubcategory(@Args('id', { type: () => Int }) id: number) {
    return this.subcategoryService.remove(id).then(result => result.id);
  }
}