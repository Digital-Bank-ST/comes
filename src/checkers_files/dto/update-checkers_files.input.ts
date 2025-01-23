import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCheckersFilesInput {
  @Field(() => Int)
  id_checkerfiles: number;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  folder_name?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  filename?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  description?: string;

  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  url?: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  id_supplier_criteria?: number;
}