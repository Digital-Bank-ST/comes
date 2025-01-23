import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SupplierCriteria } from 'src/supplier_criteria/entities/supplier_criteria.entity';

@Entity()
@ObjectType()
export class CheckersFiles {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_checkerfiles: number;

  @Column()
  @Field()
  folder_name: string;

  @Column()
  @Field()
  filename: string;

  @Column({ type: 'text' })
  @Field()
  description: string;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field(() => Int)
  id_supplier_criteria: number;

  @ManyToOne(() => SupplierCriteria, (supplierCriteria) => supplierCriteria.id_supplier_criteria)
  @Field(() => SupplierCriteria)
  supplierCriteria: SupplierCriteria;
}