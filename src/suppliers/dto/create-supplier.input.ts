import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class CreateSupplierInput {
  @Field(() => Int, { nullable: true })
  id_supplier?: number;

  @MaxLength(20)
  @IsNotEmpty()
  @Field()
  rut: string;

  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  business_name: string;

  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  business_line: string;

  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  brand_name: string;

  @MaxLength(255)
  @IsOptional()
  @Field({ nullable: true })
  additional_info?: string;

  @MaxLength(255)
  @IsOptional()
  @Field({ nullable: true })
  link?: string;

  @MaxLength(50)
  @IsOptional()
  @Field({ nullable: true })
  size?: string;

  @MaxLength(50)
  @IsOptional()
  @Field({ nullable: true })
  sales?: string;

  @IsBoolean()
  @Field()
  isActive: boolean;

  @IsBoolean()
  @Field()
  isDeleted: boolean;

  @Field({ nullable: true })
  @IsOptional()
  created_at?: Date;

  @Field({ nullable: true })
  @IsOptional()
  modified_at?: Date;

  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  slug: string;

  @Field(() => Int)
  @IsNotEmpty()
  ID_company: number;

  @Field(() => Int)
  @IsNotEmpty()
  ID_authorizations: number;
}