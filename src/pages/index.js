import React from 'react';
import '../styles/bootstrap.scss';
import '../styles/global.scss';
import '../styles/normalize.scss';
import HeaderHome from '../components/Headers/HeaderHome';
import RootLayout from '../components/RootLayout/RootLayout';
import SiteInfo from '../components/SiteInfo/SiteInfo';
import MyServices from '../components/MyServices/MyServices';
import AboutMe from '../components/AboutMe/AboutMe';
import MyStack from '../components/MyStack/MyStack';
import Portfolio from '../components/Portfolio/Portfolio';
import Testiniomals from '../components/Testiniomals/Testiniomals';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  const siteTitle = 'Nowoczesna witryna';
  const siteDescription =
    'Dariusz Wasilewski. Tworzę nowoczesne, responsywne strony i sklepy internetowe, oraz aplikacje webowe. Odkryj moje projekty i umiejętności!';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <HeaderHome active="home" />
      <SiteInfo />
      <MyServices />
      <AboutMe />
      <MyStack />
      <Portfolio />
      <Testiniomals />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;
