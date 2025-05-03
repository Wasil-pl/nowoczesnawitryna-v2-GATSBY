import React from 'react';
import HeaderHome from '../components/Header/Headers/HeaderHome';
import ScroolUpButton from '../components/Ui/ScroolUpButton/ScroolUpButton';
import WhyChooseMe from '../components/Sections/HomePage/WhyChooseMe/WhyChooseMe';
import MyServices from '../components/Sections/HomePage/MyServiceComponents/MyServices/MyServices';
import AboutMe from '../components/Sections/HomePage/AboutMe/AboutMe';
import MyStack from '../components/Sections/HomePage/MyStack/MyStack';
import WebsiteFeatures from '../components/Sections/HomePage/WebsiteFeatures/WebsiteFeatures';
import CallToActionSecond from '../components/Sections/Shared/CallToAction/CallToActionSecond';
import WebSiteProcessSteps from '../components/Sections/HomePage/WebSiteProcessSteps/WebSiteProcessSteps';
import Portfolio from '../components/Sections/Shared/Portfolio/Portfolio';
import Testiniomals from '../components/Sections/HomePage/Testiniomals/Testiniomals';
import RescentArticles from '../components/Sections/HomePage/RescentArticles/RescentArticles';
import Faq from '../components/Sections/Shared/Faq/Faq';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <>
      <HeaderHome active="home" />
      <ScroolUpButton />
      <WhyChooseMe />
      <MyServices />
      <AboutMe />
      <MyStack />
      <WebsiteFeatures />
      <CallToActionSecond />
      <WebSiteProcessSteps />
      <Portfolio />
      <Testiniomals />
      <RescentArticles />
      <Faq />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Nowoczesne Strony Internetowe – Tworzenie Sklepów Online – Jastrzębie-Zdrój – Śląsk – Polska</title>
    <meta
      name="description"
      content="Oferuję kompleksowe usługi tworzenia stron internetowych, sklepów online oraz aplikacji webowych, dla klientów z Jastrzębia-Zdroju, województwa śląskiego oraz całej Polski. Sprawdź moją ofertę!"
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Nowoczesne Strony Internetowe – Tworzenie Sklepów Online – Jastrzębie-Zdrój – Śląsk – Polska"
    />
    <meta
      property="og:description"
      content="Oferuję kompleksowe usługi tworzenia stron internetowych, sklepów online oraz aplikacji webowych, dla klientów z Jastrzębia-Zdroju, województwa śląskiego oraz całej Polski. Sprawdź moją ofertę!"
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/" />
  </>
);
