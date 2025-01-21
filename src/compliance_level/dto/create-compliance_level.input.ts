import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

@InputType()
export class CreateComplianceLevelInput {
  @MaxLength(100)
  @IsNotEmpty()
  @Field()
  level: string;

  @IsNotEmpty()
  @Field({ nullable: true })
  description?: string;
}