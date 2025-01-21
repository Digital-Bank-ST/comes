import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsBoolean } from 'class-validator';

@InputType()
export class CreateAuthorizationsInput {
  @Field(() => Int, { nullable: true })
  id_authorizations?: number;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  statement_of_truth: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  notifications: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  data_management: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  terms_and_conditions: boolean;

  @Field()
  created_at: Date;

  @Field()
  modified_at: Date;
}