import Head from 'next/head';
import '../utils/theme';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Grant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yougotwill.github.io" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="William Grant" />
        <meta property="og:title" content="William Grant" />
        <meta property="og:url" content="https://yougotwill.github.io" />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content="William Grant" />
        <meta itemProp="url" content="https://yougotwill.github.io" />
        <meta name="description" content="William Grant" />
      </Head>
      <Layout>
        <Hero />
        <Portfolio />
        <About />
        <CallToAction />
      </Layout>
    </>
  );
};
