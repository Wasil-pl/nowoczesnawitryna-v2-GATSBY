import React, { lazy, Suspense } from 'react';
import HeaderHome from '../components/Header/Headers/HeaderHome';
import ScroolUpButton from '../components/Ui/ScroolUpButton/ScroolUpButton';
import WhyChooseMe from '../components/Sections/HomePage/WhyChooseMe/WhyChooseMe';

const MyServices = lazy(() => import('../components/Sections/HomePage/MyServiceComponents/MyServices/MyServices'));
const AboutMe = lazy(() => import('../components/Sections/HomePage/AboutMe/AboutMe'));
const MyStack = lazy(() => import('../components/Sections/HomePage/MyStack/MyStack'));
const WebsiteFeatures = lazy(() => import('../components/Sections/HomePage/WebsiteFeatures/WebsiteFeatures'));
const CallToActionSecond = lazy(() => import('../components/Sections/Shared/CallToAction/CallToActionSecond'));
const WebSiteProcessSteps = lazy(() =>
  import('../components/Sections/HomePage/WebSiteProcessSteps/WebSiteProcessSteps')
);
const Portfolio = lazy(() => import('../components/Sections/Shared/Portfolio/Portfolio'));
const Testiniomals = lazy(() => import('../components/Sections/HomePage/Testiniomals/Testiniomals'));
const RescentArticles = lazy(() => import('../components/Sections/HomePage/RescentArticles/RescentArticles'));
const Faq = lazy(() => import('../components/Sections/Shared/Faq/Faq'));
const Footer = lazy(() => import('../components/Footer/Footer'));

const IndexPage = () => {
  return (
    <>
      <HeaderHome active="home" />
      <ScroolUpButton />
      <WhyChooseMe />

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <MyServices />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <AboutMe />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <MyStack />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <WebsiteFeatures />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <CallToActionSecond />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <WebSiteProcessSteps />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <Portfolio />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <Testiniomals />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <RescentArticles />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <Faq />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-8">
            <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
          </div>
        }
      >
        <Footer />
      </Suspense>
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
