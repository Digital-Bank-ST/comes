import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactsService } from './contact.service';
import { Contact } from 'src/contact/entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}

  @Mutation(() => Contact)
  createContact(@Args('createContactInput') createContactInput: CreateContactInput) {
    return this.contactsService.create(createContactInput);
  }

  @Query(() => [Contact], { name: 'contacts' })
  findAll() {
    return this.contactsService.findAll();
  }

  @Query(() => Contact, { name: 'contact' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactsService.findOne(id);
  }

  @Mutation(() => Contact)
  updateContact(@Args('updateContactInput') updateContactInput: UpdateContactInput) {
    return this.contactsService.update(updateContactInput.id_contact, updateContactInput);
  }

  @Mutation(() => Int)
  removeContact(@Args('id', { type: () => Int }) id: number) {
    return this.contactsService.remove(id).then(result => result.id);
  }

  @Query(() => [Contact], { name: 'contactsBySupplier' })
  findBySupplierId(@Args('id_supplier', { type: () => Int }) id_supplier: number) {
    return this.contactsService.findBySupplierId(id_supplier);
  }
}