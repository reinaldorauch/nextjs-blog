import { saveNewPost } from '../../lib/posts';

export default async function handler(req, res) {
  const { title, content } = req.body;
  const date = new Date();
  await saveNewPost({ title, content, date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}` });
  res.status(201).end();
}
