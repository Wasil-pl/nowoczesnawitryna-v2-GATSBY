import * as React from 'react';
import Headers from '../../components/Header/Headers/Headers';
import ScroolUpButton from '../../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../../components/Footer/Footer';
import ArticleList from '../../components/Sections/Blog/ArticleList/ArticleList';

const Blog = () => {
  const title_top = 'Blog';
  const title_middle = 'Porady i inspiracje';
  const subtitle =
    'Odkryj najnowsze trendy, praktyczne wskazówki i eksperckie porady dotyczące projektowania stron internetowych, SEO, e-commerce i aplikacji webowych. Zainspiruj się i rozwijaj swoją obecność online!';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} active="blog" />
      <ScroolUpButton />
      <ArticleList />
      <Footer />
    </>
  );
};

export default Blog;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Blog – Porady i Inspiracje o Tworzeniu Stron Internetowych</title>
    <meta
      name="description"
      content="Blog o tworzeniu stron internetowych, SEO, e-commerce i aplikacjach webowych. Zyskaj praktyczne wskazówki, najnowsze trendy i inspiracje dla Twojej marki online."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/blog/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/blog/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Blog – Porady i Inspiracje o Tworzeniu Stron Internetowych" />
    <meta
      property="og:description"
      content="Blog o tworzeniu stron internetowych, SEO, e-commerce i aplikacjach webowych. Zyskaj praktyczne wskazówki, najnowsze trendy i inspiracje dla Twojej marki online."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/blog/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/" />
  </>
);
