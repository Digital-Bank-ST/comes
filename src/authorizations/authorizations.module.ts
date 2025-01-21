import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorizations } from 'src/authorizations/entities/authorization.entity';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsResolver } from './authorizations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Authorizations])],
  providers: [AuthorizationsService, AuthorizationsResolver],
  exports: [AuthorizationsService],
})
export class AuthorizationsModule {}