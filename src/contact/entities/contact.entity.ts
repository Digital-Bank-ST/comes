import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { Supplier } from 'src/suppliers/supplier.entity';

@Entity()
@ObjectType()
export class Contact {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_contact: number;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  name: string;

  @Column({ type: 'varchar', length: 15 })
  @Field()
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  email: string;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  position: string;

  @Column({ type: 'varchar', length: 50 })
  @Field()
  type: string;

  @Column()
  @Field(() => Int)
  auth_id: number;

  @Column()
  @Field(() => Int)
  id_supplier: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.contacts)
  @Field(() => Supplier)
  supplier: Supplier;
}