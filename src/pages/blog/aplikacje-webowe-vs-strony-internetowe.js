import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import BlogArticleWebAppsVsWebsites from '../../components/BlogArticles/BlogArticleWebAppsVsWebsites ';

const BlogWebAppVsWebSite = () => {
  const title_top = 'Aplikacje Webowe vs.';
  const title_middle = 'Strony Internetowe';
  const siteTitle = 'Aplikacje Webowe vs. Strony Internetowe – Kiedy Wybrać Aplikację? - Nowoczesna witryna';
  const siteDescription =
    'Wybór między aplikacją webową a stroną internetową zależy od potrzeb firmy i oczekiwań użytkowników. Chociaż obie opcje działają w przeglądarce, różnią się funkcjonalnością, skalowalnością i zakresem zastosowań. W tym artykule przyjrzymy się kluczowym różnicom między aplikacjami webowymi a stronami internetowymi oraz sytuacjom, w których warto wybrać aplikację webową.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/aplikacje-webowe-vs-strony-internetowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleWebAppsVsWebsites />
      <Footer />
    </>
  );
};

export default BlogWebAppVsWebSite;
