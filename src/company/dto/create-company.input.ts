import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field()
  rut: string;

  @Field()
  business_name: string;

  @Field()
  industry: string;

  @Field()
  brand_name: string;

  @Field()
  link: string;

  @Field()
  slug: string;
}