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
  const title = 'blog';
  const subtitle = 'zapraszam na mój blog';
  const siteTitle = 'blog - Nowoczesna witryna';
  const siteDescription =
    'Odkryj inspirujące artykuły, porady i ciekawostki na temat branży. Mój blog to źródło wiedzy, które pomoże Ci rozwijać się w świecie internetu.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="blog" />
      <ScroolUpButton />
      <ArticleList />
      <Footer />
    </>
  );
};

export default Blog;
