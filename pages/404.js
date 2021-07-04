import Head from 'next/head';
import { useRouter } from 'next/router';

import '@utils/theme';
import Layout from '@components/Layout';

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>William Grant - Page Not Found</title>
      </Head>
      <Layout>
        <div className="loading">
          <h1 className="heading">
            Are you lost?{' '}
            <span role="img" alt="pleading face">
              🥺
            </span>
          </h1>
          <p>
            Click{' '}
            <a
              className="special bordered"
              onClick={() => {
                router.back();
              }}
            >
              here
            </a>{' '}
            to return to the previous page.
          </p>
          <p>
            Click{' '}
            <a
              className="special bordered"
              onClick={() => {
                router.push('/');
              }}
            >
              here
            </a>{' '}
            to return to the homepage.
          </p>
        </div>
      </Layout>
    </>
  );
}
