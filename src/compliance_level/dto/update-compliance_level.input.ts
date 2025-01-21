import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { CreateComplianceLevelInput } from './create-compliance_level.input';

@InputType()
export class UpdateComplianceLevelInput extends PartialType(CreateComplianceLevelInput) {
  @Field(() => Int)
  id_compliance_level: number;
}