import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Authorizations {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_authorizations: number;

  @Column({ default: false })
  @Field()
  statement_of_truth: boolean;

  @Column({ default: false })
  @Field()
  notifications: boolean;

  @Column({ default: false })
  @Field()
  data_management: boolean;

  @Column({ default: false })
  @Field()
  terms_and_conditions: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Field()
  modified_at: Date;
}