import React from 'react';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

const Layout = ({ title = 'William Grant', children }) => {
  return (
    <>
      <title>{title}</title>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
