import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { SupplierSubcategory } from 'src/supplier_subcategory/entities/supplier_subcategory.entity';
import { Category } from 'src/category/entities/category.entity';

@Entity()
@ObjectType()
export class Subcategory {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_subcategory: number;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  subcategory: string;

  @Column()
  @Field(() => Int)
  id_category: number;

  @ManyToOne(() => Category, (category) => category.id)
  @Field(() => Category)
  category: Category;

  // @OneToMany(() => SupplierSubcategory, (supplierSubcategory) => supplierSubcategory.subcategory)
  // @Field(() => [SupplierSubcategory], { nullable: true })
  // supplierSubcategories?: SupplierSubcategory[];
}