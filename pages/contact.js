import Head from 'next/head';
import Layout from '../components/layout';

export default function NewPost() {
  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>
      <div>
        <form action='/api/contact' method='POST'>
          <p>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </p>
          <p>
            <button>Save</button>
          </p>
        </form>
      </div>
    </Layout>
  );
}
