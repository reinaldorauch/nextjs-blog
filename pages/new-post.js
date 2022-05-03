import Head from 'next/head';
import Layout from '../components/layout';

export default function NewPost() {
  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <div>
        <form action='/api/new-post' method='POST'>
          <p>
            <label htmlFor="title">Title</label>
            <input name="title" id="title" />
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content"></textarea>
          </p>
          <p>
            <button>Save</button>
          </p>
        </form>
      </div>
    </Layout>
  );
}
