import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SupplierCompany {
  @PrimaryGeneratedColumn()
  id_supplier_company: number;

  @Column()
  id_supplier: number;

  @Column()
  id_company: number;

  @Column({ default: false })
  preexisting: boolean;
}