import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import Headers from '../../components/Header/Headers/Headers';
import ScroolUpButton from '../../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../../components/Footer/Footer';
import BlogArticleResponsiveDesign from '../../components/Sections/Blog/BlogArticles/BlogArticleResponsiveDesign';

const BlogResponsiveSite = () => {
  const title_top = 'Czym Jest';
  const title_middle = 'Responsywność';
  const title_bottom = 'Strony?';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} active="blog" />
      <ScroolUpButton />
      <BlogArticleResponsiveDesign />
      <Footer />
    </>
  );
};

export default BlogResponsiveSite;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Czym Jest Responsywność Strony i Dlaczego Jest Tak Ważna? - Nowoczesna witryna</title>
    <meta
      name="description"
      content="Responsywność strony internetowej to jej zdolność do dostosowywania się do różnych wielkości ekranów – od komputerów stacjonarnych po smartfony i tablety. W dzisiejszym świecie, gdzie większość użytkowników korzysta z urządzeń mobilnych, responsywność stała się kluczowym elementem nowoczesnych stron internetowych."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/czym-jest-responsywnosc-strony/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/blog/czym-jest-responsywnosc-strony/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/blog/what-is-website-responsiveness/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Czym Jest Responsywność Strony i Dlaczego Jest Tak Ważna?" />
    <meta
      property="og:description"
      content="Responsywność strony internetowej to jej zdolność do dostosowywania się do różnych wielkości ekranów – od komputerów stacjonarnych po smartfony i tablety."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/blog/czym-jest-responsywnosc-strony/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/czym-jest-responsywnosc-strony/" />
  </>
);
