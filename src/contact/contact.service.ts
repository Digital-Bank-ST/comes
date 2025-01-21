import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from 'src/contact/entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  create(createContactInput: CreateContactInput): Promise<Contact> {
    const newContact = this.contactRepository.create(createContactInput);
    return this.contactRepository.save(newContact);
  }

  findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  findOne(id: number): Promise<Contact> {
    return this.contactRepository.findOne({
      where: { id_contact: id },
    });
  }

  async update(id: number, updateContactInput: UpdateContactInput): Promise<Contact> {
    await this.contactRepository.update(id, updateContactInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ id: number }> {
    const contact = await this.findOne(id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    await this.contactRepository.remove(contact);
    return { id };
  }

  findBySupplierId(id_supplier: number): Promise<Contact[]> {
    return this.contactRepository.find({
      where: { id_supplier },
    });
  }
}