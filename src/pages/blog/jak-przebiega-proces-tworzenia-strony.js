import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import BlogArticleWebDesignProcess from '../../components/BlogArticles/BlogArticleWebDesignProcess';

const BlogProcessSiteMaking = () => {
  const title_top = 'Jak Przebiega Proces';
  const title_middle = 'Tworzenia Strony Internetowej?';
  const siteTitle = 'Jak Przebiega Proces Tworzenia Strony Internetowej? Krok po Kroku - Nowoczesna witryna';
  const siteDescription =
    'Tworzenie strony internetowej to złożony proces, który wymaga planowania, projektowania, kodowania i testowania. Każdy etap ma kluczowe znaczenie dla osiągnięcia ostatecznego sukcesu strony, która będzie zarówno funkcjonalna, jak i estetyczna. Przedstawiamy kroki, które prowadzą do stworzenia nowoczesnej strony internetowej.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/jak-przebiega-proces-tworzenia-strony/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/blog/how-the-website-creation-process-works/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleWebDesignProcess />
      <Footer />
    </>
  );
};

export default BlogProcessSiteMaking;
