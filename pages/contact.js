import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

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
            <input className={utilStyles.width100} name="name" id="name" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input className={utilStyles.width100} required type="email" name="email" id="email" />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea className={utilStyles.width100} required name="message" id="message"></textarea>
          </p>
          <p>
            <button>Save</button>
          </p>
        </form>
      </div>
    </Layout>
  );
}
