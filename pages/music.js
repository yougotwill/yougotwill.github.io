import Head from 'next/head';

import '@utils/theme';

import Layout from '@components/Layout';
import Playlists from '@components/Playlists';

export default function Music() {
  return (
    <>
      <Head>
        <title>William Grant - Music</title>
      </Head>
      <Layout>
        <div className="loading">
          <h1>
            Loading...{' '}
            <span role="img" alt="headphones">
              🎧
            </span>
          </h1>
        </div>
        <Playlists />
      </Layout>
    </>
  );
}
