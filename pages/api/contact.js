import { saveContact } from '../../lib/contact';
import ValidationError from '../../lib/errors/validation';

export default async function handler(req, res) {
  try {
    await saveContact(req.body);
    res.redirect(201, '/contact');
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400);
    } else {
      res.status(500);
    }

    return res.end({ message: err.message });
  }
}

