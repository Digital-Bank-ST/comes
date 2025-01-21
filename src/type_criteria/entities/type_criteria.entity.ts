import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class TypeCriteria {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_type_criteria: number;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  type: string;
}