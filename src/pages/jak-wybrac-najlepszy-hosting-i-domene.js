import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import RootLayout from '../components/RootLayout/RootLayout';
import Headers from '../components/Headers/Headers';
import BlogArticleHosting from '../components/BlogArticles/BlogArticleHosting';
import Footer from '../components/Footer/Footer';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';

const BlogHosting = () => {
  const title_top = 'Jak wybrać najlepszy';
  const title_middle = 'hosting i domenę';
  const siteTitle = 'Jak wybrać najlepszy hosting i domenę - Nowoczesna witryna';
  const siteDescription =
    'Jak wybrać najlepszy hosting i domenę - artykuł ten pomoże Ci w dokonaniu prawidłowego wyboru, bo wbrew pozorom są to bardzo ważne kwestie...';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/jak-wybrac-najlepszy-hosting-i-domene/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleHosting />
      <Footer />
    </>
  );
};

export default BlogHosting;
