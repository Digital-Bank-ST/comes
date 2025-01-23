import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id_company: number;

  @Column({ unique: true })
  rut: string;

  @Column()
  business_name: string;

  @Column()
  industry: string;

  @Column()
  brand_name: string;

  @Column()
  link: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  modified_at: Date;

  @Column({ unique: true })
  slug: string;
}