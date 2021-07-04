import Head from 'next/head';
import matter from 'gray-matter';

import '@utils/theme';

import Layout from '@components/Layout';
import PostList from '@components/PostList';
import CallToAction from '@components/CallToAction';

export default function Blog({ posts, ...pageProps }) {
  return (
    <>
      <Head>
        <title>William Grant - Blog</title>
      </Head>
      <Layout>
        <PostList posts={posts} />
        <CallToAction />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys(); // TODO: Readup
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];
      const markdown = matter(value.default);
      return {
        slug,
        frontMatter: markdown.data,
        markdownBody: markdown.content,
      };
    });
    return data.filter((post) => post.frontMatter.isPublished);
  })(require.context('../../posts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
