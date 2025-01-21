import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

@InputType()
export class CreateContactInput {
  @Field(() => Int, { nullable: true })
  id_contact?: number;

  @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @Field()
  name: string;

  @MaxLength(15, { message: 'El teléfono no puede tener más de 15 caracteres' })
  @IsNotEmpty({ message: 'El teléfono es obligatorio' })
  @Field()
  phone: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @MaxLength(100, { message: 'El correo electrónico no puede tener más de 100 caracteres' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  @Field()
  email: string;

  @MaxLength(50, { message: 'El puesto no puede tener más de 50 caracteres' })
  @IsNotEmpty({ message: 'El puesto es obligatorio' })
  @Field()
  position: string;

  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @Field()
  type: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'El ID de autorización es obligatorio' })
  auth_id: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'El ID del proveedor es obligatorio' })
  id_supplier: number;
}