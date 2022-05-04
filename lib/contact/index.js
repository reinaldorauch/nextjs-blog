import { getConnection } from '../db';
import { contactSchema } from './validation';
import ValidationError from '../errors/validation';

export async function saveContact(contact) {
  if (!contact) throw new ValidationError('no payload');

  const { errors } = contactSchema.validate(contact);

  if (errors) {
    throw new ValidationError(errors);
  }

  const conn = getConnection();

  await conn('contact').insert(contact);
} 
