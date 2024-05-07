import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import ConactUs from '../components/ContactUs/ContactUs';
import RootLayout from '../components/RootLayout/RootLayout';
import SiteInfo from '../components/SiteInfo/SiteInfo';

const IndexPage = () => {
  return (
    <RootLayout>
      <HeaderHome />;
      <SiteInfo />
      <ConactUs />
    </RootLayout>
  );
};

export default IndexPage;
