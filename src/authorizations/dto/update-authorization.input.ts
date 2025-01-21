import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateAuthorizationsInput } from './create-authorization.input';

@InputType()
export class UpdateAuthorizationsInput extends PartialType(CreateAuthorizationsInput) {
  @Field(() => Int)
  id_authorizations: number;
}