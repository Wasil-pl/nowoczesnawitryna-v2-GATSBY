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
import Faq from '../components/Faq/Faq';
import WebsiteFunctions from '../components/WebsiteFunctions/WebsiteFunctions';
import Action2 from '../components/Action/Action2';

const IndexPage = () => {
  const siteTitle = 'Nowoczesne Strony Internetowe – Tworzenie Sklepów Online – Jastrzębie-Zdrój – Śląsk – Polska';
  const siteDescription =
    'Oferuję kompleksowe usługi tworzenia stron internetowych, sklepów online oraz aplikacji webowych, dla klientów z Jastrzębia-Zdroju, województwa śląskiego oraz całej Polski. Sprawdź moją ofertę!';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <HeaderHome active="home" />
      <ScroolUpButton />
      <SiteInfo />
      <MyServices />
      <AboutMe />
      <MyStack />
      <WebsiteFunctions />
      <Action2 />
      <ProcessSteps />
      <Portfolio />
      <Testiniomals />
      <RescentArticles />
      <Faq />
      <Footer />
    </>
  );
};

export default IndexPage;
