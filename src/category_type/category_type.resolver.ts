import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryTypeService } from './category_type.service';
import { CategoryType } from './entities/category_type.entity';

@Resolver(() => CategoryType)
export class CategoryTypeResolver {
  constructor(private readonly categoryTypeService: CategoryTypeService) {}

  @Query(() => [CategoryType], { name: 'categoryTypes' })
  findAll() {
    return this.categoryTypeService.findAll();
  }

  @Query(() => CategoryType, { name: 'categoryType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryTypeService.findOne(id);
  }

  @Mutation(() => CategoryType)
  createCategoryType(@Args('name') name: string) {
    return this.categoryTypeService.create(name);
  }
}