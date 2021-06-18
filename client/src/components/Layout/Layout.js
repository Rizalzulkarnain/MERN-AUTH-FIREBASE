import React from 'react';

import Header from '../Nav/NavBar/NavBar';
import Footer from '../Footer/Footer';

import { Main } from '../../styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
