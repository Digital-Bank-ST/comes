import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Contact } from 'src/contact/entities/contact.entity';

@Entity()
@ObjectType()
export class Supplier {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_supplier: number;

  @Column({ type: 'varchar', length: 20 })
  @Field()
  rut: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  business_name: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  business_line: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  brand_name: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  additional_info?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  link?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field({ nullable: true })
  size?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field({ nullable: true })
  sales?: string;

  @Column({ default: true })
  @Field()
  isActive: boolean;

  @Column({ default: false })
  @Field()
  isDeleted: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Field()
  modified_at: Date;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  slug: string;

  @Column()
  @Field(() => Int)
  ID_company: number;

  @Column()
  @Field(() => Int)
  ID_authorizations: number;

  // @OneToMany(() => SupplierSubcategory, (supplierSubcategory) => supplierSubcategory.supplier)
  // @Field(() => [SupplierSubcategory], { nullable: true })
  // supplierSubcategories?: SupplierSubcategory[];

  @OneToMany(() => Contact, (contact) => contact.supplier)
  @Field(() => [Contact], { nullable: true })
  contacts?: Contact[];
}