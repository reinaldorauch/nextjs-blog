import { saveContact } from '../../lib/contact';

export default async function handler(req, res) {
  await saveContact(req.body);
  res.redirect(201, '/contact');
}

