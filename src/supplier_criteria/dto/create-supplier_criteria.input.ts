import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSupplierCriteriaInput {
  @Field(() => Int)
  @IsNotEmpty()
  id_criteria: number;

  @Field(() => Int)
  @IsNotEmpty()
  id_compliance_level: number;

  @Field(() => Int)
  @IsNotEmpty()
  id_checkerfiles: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  detail: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  datasource: string;

  @Field(() => Int)
  @IsNotEmpty()
  id_supplier: number;
}