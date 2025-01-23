import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Criteria } from 'src/criteria/entities/criteria.entity';
import { ComplianceLevel } from 'src/compliance_level/entities/compliance_level.entity';
import { Supplier } from 'src/suppliers/supplier.entity';

@Entity()
@ObjectType()
export class SupplierCriteria {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_supplier_criteria: number;

  @Column()
  @Field(() => Int)
  id_criteria: number;

  @ManyToOne(() => Criteria, (criteria) => criteria.id_criteria)
  @Field(() => Criteria)
  criteria: Criteria;

  @Column()
  @Field(() => Int)
  id_compliance_level: number;

  @ManyToOne(() => ComplianceLevel, (complianceLevel) => complianceLevel.id_compliance_level)
  @Field(() => ComplianceLevel)
  complianceLevel: ComplianceLevel;

  @Column()
  @Field(() => Int)
  id_checkerfiles: number;

  @Column({ type: 'text' })
  @Field()
  detail: string;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  datasource: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Field()
  updated_at: Date;

  @Column()
  @Field(() => Int)
  id_supplier: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id_supplier)
  @Field(() => Supplier)
  supplier: Supplier;
}