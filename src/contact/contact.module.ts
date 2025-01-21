import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsResolver } from './contact.resolver';
import { ContactsService } from './contact.service';
import { Contact } from 'src/contact/entities/contact.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService, ContactsResolver],
  exports: [ContactsService],
})
export class ContactModule {}