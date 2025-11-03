import React from 'react';
import loadable from '@loadable/component';
import HeaderHome from '../components/Header/Headers/HeaderHome';
import { faqItemsHome } from '../consts/faqItems';

const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
  </div>
);

const MyServices = loadable(() => import('../components/Sections/HomePage/MyServiceComponents/MyServices/MyServices'), {
  fallback: <LoadingFallback />,
});
const WhyChooseMe = loadable(() => import('../components/Sections/HomePage/WhyChooseMe/WhyChooseMe'), {
  fallback: <LoadingFallback />,
});
const AboutMe = loadable(() => import('../components/Sections/HomePage/AboutMe/AboutMe'), {
  fallback: <LoadingFallback />,
});
const MyStack = loadable(() => import('../components/Sections/HomePage/MyStack/MyStack'), {
  fallback: <LoadingFallback />,
});
const WebsiteFeatures = loadable(() => import('../components/Sections/HomePage/WebsiteFeatures/WebsiteFeatures'), {
  fallback: <LoadingFallback />,
});
const ValueProposition = loadable(() => import('../components/Sections/HomePage/ValueProposition/ValueProposition'), {
  fallback: <LoadingFallback />,
});

const CallToActionSecond = loadable(() => import('../components/Sections/Shared/CallToAction/CallToActionSecond'), {
  fallback: <LoadingFallback />,
});
const WebSiteProcessSteps = loadable(
  () => import('../components/Sections/HomePage/WebSiteProcessSteps/WebSiteProcessSteps'),
  {
    fallback: <LoadingFallback />,
  }
);
const Portfolio = loadable(() => import('../components/Sections/Shared/Portfolio/Portfolio'), {
  fallback: <LoadingFallback />,
});
const Testiniomals = loadable(() => import('../components/Sections/HomePage/Testiniomals/Testiniomals'), {
  fallback: <LoadingFallback />,
});
const RescentArticles = loadable(() => import('../components/Sections/HomePage/RescentArticles/RescentArticles'), {
  fallback: <LoadingFallback />,
});
const Faq = loadable(() => import('../components/Sections/Shared/Faq/Faq'), {
  fallback: <LoadingFallback />,
});

const IndexPage = ({ pageContext, location }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <HeaderHome crumbs={crumbs} location={location} />
      <WhyChooseMe />
      <MyServices />
      <AboutMe />
      <MyStack />
      <WebsiteFeatures />
      <ValueProposition />
      <CallToActionSecond />
      <WebSiteProcessSteps />
      <Portfolio />
      <Testiniomals />
      <RescentArticles />
      <Faq faqItems={faqItemsHome} />
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
