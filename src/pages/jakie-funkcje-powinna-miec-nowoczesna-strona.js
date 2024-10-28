import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import RootLayout from '../components/RootLayout/RootLayout';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footer/Footer';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import BlogArticleModernWebsiteFeatures from '../components/BlogArticles/BlogModernWebsiteFeatures';

const BlogModernWebsite = () => {
  const title_top = 'Jakie Funkcje Powinna Mieć';
  const title_middle = 'Nowoczesna Strona Internetowa?';
  const siteTitle = 'Jakie Funkcje Powinna Mieć Nowoczesna Strona Internetowa? - Nowoczesna witryna';
  const siteDescription =
    'Jakie Funkcje Powinna Mieć Nowoczesna Strona Internetowa? - artykuł ten pomoże Ci w dokonaniu prawidłowego wyboru, bo wbrew pozorom są to bardzo ważne kwestie...';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/jakie-funkcje-powinna-miec-nowoczesna-strona/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleModernWebsiteFeatures />
      <Footer />
    </>
  );
};

export default BlogModernWebsite;
