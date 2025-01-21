import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TypeCriteria } from 'src/type_criteria/entities/type_criteria.entity';

@Entity()
@ObjectType()
export class Criteria {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_criteria: number;

  @Column()
  @Field(() => Int)
  id_type_criteria: number;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  title: string;

  @Column({ type: 'text' })
  @Field()
  description: string;

  @Column({ type: 'varchar', length: 255 })
  @Field()
  standard: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Field()
  modified_at: Date;

  // @ManyToOne(() => TypeCriteria, (typeCriteria) => typeCriteria.id_type_criteria)
  // @Field(() => TypeCriteria)
  // typeCriteria: TypeCriteria;
}