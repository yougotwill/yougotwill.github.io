import Head from 'next/head';
import matter from 'gray-matter';

import '@utils/theme';

import CallToAction from '@components/CallToAction';
import Layout from '@components/Layout';
import Post from '@components/Post';

export default function BlogPost({ frontMatter, markdownBody }) {
  if (!frontMatter) return <></>;
  return (
    <>
      <Head>
        <title>{frontMatter.title} | William Grant</title>
      </Head>
      <Layout>
        <Post
          title={frontMatter.title}
          author={frontMatter.author}
          date={frontMatter.publishedOn}
          markdown={markdownBody}
        />
        <CallToAction />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { postname } = context.params;

  const content = await import(`../../posts/${postname}.md`);
  const markdown = matter(content.default);

  if (!markdown.data.isPublished) return { notFound: true };

  return {
    props: {
      frontMatter: markdown.data,
      markdownBody: markdown.content,
    },
  };
}

// maps markdown posts to paths for get static paths used for dynamic route generation
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      return slug;
    });
    return data;
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false, // shows 404 page if no match
  };
}
