import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

const RootLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Nowoczesna Witryna</title>
        <meta name="description" content="Strona główna" />
      </Helmet>

      {children}
    </>
  );
};

export default RootLayout;
