import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import RootLayout from '../components/RootLayout/RootLayout';
import Headers from '../components/Headers/Headers';
import BlogArticleCms from '../components/BlogArticles/BlogArticleCms';
import Footer from '../components/Footer/Footer';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';

const BlogCMS = () => {
  const title_top = 'Cms vs strona';
  const title_middle = 'pisana od podstaw';
  const siteTitle = 'Cms vs strona pisana od podstaw - Nowoczesna witryna';
  const siteDescription =
    'Cms vs strona pisana od podstaw - Ten artykuł pomoże Ci zdecydować, czy lepiej jest postawić na stronę internetową pisana od podstaw, czy na system CMS.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/cms-vs-strona-pisana-od-podstaw/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleCms />
      <Footer />
    </>
  );
};

export default BlogCMS;
