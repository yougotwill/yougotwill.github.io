import Head from 'next/head';
import { useRouter } from 'next/router';

import '@utils/theme';
import Layout from '@components/Layout';

export default function Custom404() {
  const router = useRouter();
  return(
    <>
      <Head>
        <title>William Grant - 404</title>
      </Head>
      <Layout>
        <div className='loading'>
          <h1 className='heading'>Are you lost?</h1>
          <p>Click <a onClick={() => { router.back() }}>here</a> to return to the previous page.</p>
          <p>Click <a onClick={() => { router.push('/') }}>here</a> to return to the homepage.</p>
        </div>
      </Layout>
    </>
  );
}
