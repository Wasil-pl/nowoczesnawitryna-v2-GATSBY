import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import BlogArticleChoosingWebsite from '../../components/BlogArticles/BlogArticleChoosingWebsite';

const BlogJakaStrona = () => {
  const title_top = 'Jak wybrać idealną';
  const title_middle = 'strone internetową';
  const siteTitle =
    'Jak wybrać idealną stronę internetową dla Twojej Firmy: One-Page, Multi-Page czy Strona z CMS? - Nowoczesna witryna';
  const siteDescription =
    'Wybór odpowiedniego rodzaju strony internetowej jest kluczowy dla sukcesu każdej firmy w internecie. Różne typy stron odpowiadają różnym potrzebom biznesowym – od prostych stron typu One-Page po rozbudowane witryny Multi-Page i strony oparte na systemach CMS. W tym artykule przyjrzymy się, jakie cechy wyróżniają każdy z tych typów, oraz doradzimy, jak dobrać idealną stronę do Twojej działalności.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/blog/jak-wybrac-idealna-strone/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleChoosingWebsite />
      <Footer />
    </>
  );
};

export default BlogJakaStrona;
