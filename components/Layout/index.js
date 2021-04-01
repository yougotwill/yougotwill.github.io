import React from 'react';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({title = 'William Grant', children}) => {
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
