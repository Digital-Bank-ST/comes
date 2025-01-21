import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorizations } from 'src/authorizations/entities/authorization.entity';
import { CreateAuthorizationsInput } from 'src/authorizations/dto/create-authorization.input';
import { UpdateAuthorizationsInput } from 'src/authorizations/dto/update-authorization.input';

@Injectable()
export class AuthorizationsService {
  constructor(
    @InjectRepository(Authorizations)
    private authorizationsRepository: Repository<Authorizations>,
  ) {}

  create(createAuthorizationsInput: CreateAuthorizationsInput): Promise<Authorizations> {
    const newAuthorizations = this.authorizationsRepository.create(createAuthorizationsInput);
    return this.authorizationsRepository.save(newAuthorizations);
  }

  findAll(): Promise<Authorizations[]> {
    return this.authorizationsRepository.find();
  }

  findOne(id: number): Promise<Authorizations> {
    return this.authorizationsRepository.findOne({
      where: { id_authorizations: id },
    });
  }

  async update(id: number, updateAuthorizationsInput: UpdateAuthorizationsInput): Promise<Authorizations> {
    await this.authorizationsRepository.update(id, updateAuthorizationsInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const authorizations = await this.findOne(id);
    if (!authorizations) {
      throw new Error('Authorizations not found');
    }
    await this.authorizationsRepository.remove(authorizations);
    return { id };
  }
}