import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class ComplianceLevel {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_compliance_level: number;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  level: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  description?: string;
}