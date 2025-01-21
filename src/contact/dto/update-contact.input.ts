import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateContactInput } from './create-contact.input';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {
  @Field(() => Int)
  id_contact: number;
}