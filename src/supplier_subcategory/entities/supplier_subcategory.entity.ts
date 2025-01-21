import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Supplier } from 'src/suppliers/supplier.entity';
import { Subcategory } from 'src/subcategory/entities/subcategory.entity';
import { Category } from 'src/category/entities/category.entity';

@Entity()
@ObjectType()
export class SupplierSubcategory {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_supplier_subcategory: number;

  @Column()
  @Field(() => Int)
  id_category: number;

  @Column()
  @Field(() => Int)
  id_subcategory: number;

  @Column()
  @Field(() => Int)
  id_supplier: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id_supplier)
  @Field(() => Supplier)
  supplier: Supplier;

  // @ManyToOne(() => Subcategory, (subcategory) => subcategory.supplierSubcategories)
  // @Field(() => Subcategory)
  // subcategory: Subcategory;

  // @ManyToOne(() => Category, (category) => category.id)
  // @Field(() => Category)
  // category: Category;
}