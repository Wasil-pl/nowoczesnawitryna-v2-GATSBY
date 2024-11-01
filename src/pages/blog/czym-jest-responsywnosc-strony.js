import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import BlogArticleResponsiveDesign from '../../components/BlogArticles/BlogArticleResponsiveDesign';

const BlogResponsiveSite = () => {
  const title_top = 'Czym Jest';
  const title_middle = 'Responsywność';
  const title_bottom = 'Strony?';
  const siteTitle = 'Czym Jest Responsywność Strony i Dlaczego Jest Tak Ważna? - Nowoczesna witryna';
  const siteDescription =
    'Responsywność strony internetowej to jej zdolność do dostosowywania się do różnych wielkości ekranów – od komputerów stacjonarnych po smartfony i tablety. W dzisiejszym świecie, gdzie większość użytkowników korzysta z urządzeń mobilnych, responsywność stała się kluczowym elementem nowoczesnych stron internetowych.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/czym-jest-responsywnosc-strony/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} active="blog" />
      <ScroolUpButton />
      <BlogArticleResponsiveDesign />
      <Footer />
    </>
  );
};

export default BlogResponsiveSite;
