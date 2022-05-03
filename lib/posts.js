import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fn => {
    // remove ".md" from file name to get id
    const id = fn.replace(/\.md$/, '');

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
