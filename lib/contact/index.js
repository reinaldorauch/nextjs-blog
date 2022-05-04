import { getConnection } from '../db';
import { contactSchema } from './validation';

export async function saveContact(contact) {
  const { errors } = contactSchema.validate(contact);

  if (errors) {
    throw new ValidationError(errors);
  }

  const conn = getConnection();

  await conn('contact').insert(contact);
} 
