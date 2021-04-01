import Head from 'next/head';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import CallToAction from '../components/CallToAction';

export default function Home() {
  if (typeof window !== 'undefined') {
    window.document.addEventListener('DOMContentLoaded', (event) =>
    {
      if ( (localStorage.getItem('mode') || 'dark-theme') === 'dark-theme') {
        document.querySelector('body').classList.add('dark-theme')
      } else {
        document.querySelector('body').classList.remove('dark-theme');
      }
    });
  } 
  return (
    <Layout>
        <Hero />
        <Portfolio />
        <About />
        <CallToAction />
    </Layout>
  );
};
