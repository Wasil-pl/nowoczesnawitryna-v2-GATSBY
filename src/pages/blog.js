import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import RootLayout from '../components/RootLayout/RootLayout';
import Headers from '../components/Headers/Headers';
import ArticleList from '../components/ArticleList/ArticleList';
import Footer from '../components/Footer/Footer';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';

const Blog = () => {
  const title_top = 'Blog';
  const title_middle = 'Porady i inspiracje';
  const subtitle =
    'Odkryj najnowsze trendy, praktyczne wskazówki i eksperckie porady dotyczące projektowania stron internetowych, SEO, e-commerce i aplikacji webowych. Zainspiruj się i rozwijaj swoją obecność online!';
  const siteTitle = 'Blog – Porady i Inspiracje o Tworzeniu Stron Internetowych';
  const siteDescription =
    'Blog o tworzeniu stron internetowych, SEO, e-commerce i aplikacjach webowych. Zyskaj praktyczne wskazówki, najnowsze trendy i inspiracje dla Twojej marki online.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} active="blog" />
      <ScroolUpButton />
      <ArticleList />
      <Footer />
    </>
  );
};

export default Blog;
