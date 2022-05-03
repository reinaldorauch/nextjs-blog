import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
const getFnId = fn => fn.replace(/\.md$/, '');

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fn => {
    // remove ".md" from file name to get id
    const id = getFnId(fn);

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fn);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return { id, ...matterResult.data };
  });

  return allPostsData.sort(({ data: a }, { date: b }) => {
    if (a < b) {
      return 1;
    }

    if (a > b) {
      return -1;
    }

    return 0;
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fn => ({ params: { id: getFnId(fn) } }))
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark().use(html).process(matterResult.content);
  return { id, contentHtml: processedContent.toString(), ...matterResult.data };
}
