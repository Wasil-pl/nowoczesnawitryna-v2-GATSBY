import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import HeaderHome from '../components/HeaderHome/HeaderHome';
import ConactUs from '../components/ContactUs/ContactUs';
import RootLayout from '../components/RootLayout/RootLayout';
import SiteInfo from '../components/SiteInfo/SiteInfo';
import MyServices from '../components/MyServices/MyServices';
import AboutMe from '../components/AboutMe/AboutMe';
import MyStack from '../components/MyStack/MyStack';
import Portfolio from '../components/Portfolio/Portfolio';
import Testiniomals from '../components/Testiniomals/Testiniomals';

const IndexPage = () => {
  return (
    <RootLayout>
      <HeaderHome />;
      <SiteInfo />
      <MyServices />
      <AboutMe />
      <MyStack />
      <Portfolio />
      <Testiniomals />
      <ConactUs />
    </RootLayout>
  );
};

export default IndexPage;
