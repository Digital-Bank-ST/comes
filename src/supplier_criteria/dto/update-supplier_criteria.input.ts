import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateSupplierCriteriaInput {
  @Field(() => Int)
  id_supplier_criteria: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_criteria?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_compliance_level?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_checkerfiles?: number;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  detail?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  datasource?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_supplier?: number;
}