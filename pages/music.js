import Head from 'next/head';

import '../utils/theme';
import Layout from '../components/Layout';
import Playlists from '../components/Playlists';

export default function Music() {
  return (
    <>
      <Head>
        <title>William Grant - Music</title>
      </Head>
      <Layout>
        <h1 class="loading">Loading...</h1>
        <Playlists />
      </Layout>
    </>
  );
};
