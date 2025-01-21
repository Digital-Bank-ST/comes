import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthorizationsService } from './authorizations.service';
import { Authorizations } from 'src/authorizations/entities/authorization.entity';
import { CreateAuthorizationsInput } from 'src/authorizations/dto/create-authorization.input';
import { UpdateAuthorizationsInput } from 'src/authorizations/dto/update-authorization.input';

@Resolver(() => Authorizations)
export class AuthorizationsResolver {
  constructor(private readonly authorizationsService: AuthorizationsService) {}

  @Mutation(() => Authorizations)
  createAuthorizations(@Args('createAuthorizationsInput') createAuthorizationsInput: CreateAuthorizationsInput) {
    return this.authorizationsService.create(createAuthorizationsInput);
  }

  @Query(() => [Authorizations], { name: 'authorizations' })
  findAll() {
    return this.authorizationsService.findAll();
  }

  @Query(() => Authorizations, { name: 'authorization' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorizationsService.findOne(id);
  }

  @Mutation(() => Authorizations)
  updateAuthorizations(@Args('updateAuthorizationsInput') updateAuthorizationsInput: UpdateAuthorizationsInput) {
    return this.authorizationsService.update(updateAuthorizationsInput.id_authorizations, updateAuthorizationsInput);
  }

  @Mutation(() => Int)
  removeAuthorizations(@Args('id', { type: () => Int }) id: number) {
    return this.authorizationsService.remove(id).then(result => result.id);
  }
}