import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCheckersFilesInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  folder_name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  filename: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field(() => Int)
  @IsNotEmpty()
  id_supplier_criteria: number;
}