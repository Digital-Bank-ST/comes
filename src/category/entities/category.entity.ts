import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CategoryType } from 'src/category_type/entities/category_type.entity';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  category: string;

  @Column()
  @Field(() => Int)
  categoryTypeId: number;

  @ManyToOne(() => CategoryType, (categoryType) => categoryType.id)
  @Field(() => CategoryType)
  categoryType: CategoryType;
}