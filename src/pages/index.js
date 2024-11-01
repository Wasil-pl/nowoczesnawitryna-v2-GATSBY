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
import Footer from '../components/Footer/Footer';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ProcessSteps from '../components/ProcessSteps/ProcessSteps';
import RescentArticles from '../components/RescentArticles/RescentArticles';
import Action from '../components/Action/Action';

const IndexPage = () => {
  const siteTitle = ' Nowoczesne Strony Internetowe – Tworzenie Stron, Sklepy Online, Aplikacje Webowe';
  const siteDescription =
    'Oferuję kompleksowe usługi tworzenia stron internetowych, sklepów online oraz aplikacji webowych. Responsywne, zoptymalizowane pod kątem SEO, dopasowane do Twoich potrzeb. Skontaktuj się i zyskaj przewagę w internecie!';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <HeaderHome active="home" />
      <ScroolUpButton />
      <SiteInfo />
      <MyServices />
      <AboutMe />
      <MyStack />
      <ProcessSteps />
      <Portfolio />
      <Testiniomals />
      <RescentArticles />
      <Action kontakt_2 variant={'free'} />
      <Footer />
    </>
  );
};

export default IndexPage;
