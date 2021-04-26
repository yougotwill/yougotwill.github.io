import Head from 'next/head';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import '@utils/theme';

import Layout from '@components/Layout';

export default function Post({ frontMatter, markdownBody }) {
  if (!frontMatter) return <></>;
  return (
    <>
      <Layout>
        <Head>
          <title>{frontMatter.title} | William Grant</title>
        </Head>
        <article>
          <h1>{frontMatter.title}</h1>
          <p>By {frontMatter.author}</p>
          <div>
            <ReactMarkdown children={markdownBody} />
          </div>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { postname } = context.params;

  const content = await import(`../../posts/${postname}.md`);
  const markdown = matter(content.default);

  return {
    props: {
      frontMatter: markdown.data,
      markdownBody: markdown.content
    }
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
  }
}
