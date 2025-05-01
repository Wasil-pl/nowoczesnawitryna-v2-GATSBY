import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import Headers from '../../components/Header/Headers/Headers';
import ScroolUpButton from '../../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../../components/Footer/Footer';
import BlogArticleChoosingWebsite from '../../components/Sections/Blog/BlogArticles/BlogArticleChoosingWebsite';

const BlogJakaStrona = () => {
  const title_top = 'Jak wybrać idealną';
  const title_middle = 'strone internetową';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleChoosingWebsite />
      <Footer />
    </>
  );
};

export default BlogJakaStrona;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>
      Jak wybrać idealną stronę internetową dla Twojej Firmy: One-Page, Multi-Page czy Strona z CMS? - Nowoczesna
      witryna
    </title>
    <meta
      name="description"
      content="Wybór odpowiedniego rodzaju strony internetowej jest kluczowy dla sukcesu każdej firmy w internecie. Różne typy stron odpowiadają różnym potrzebom biznesowym – od prostych stron typu One-Page po rozbudowane witryny Multi-Page i strony oparte na systemach CMS. W tym artykule przyjrzymy się, jakie cechy wyróżniają każdy z tych typów, oraz doradzimy, jak dobrać idealną stronę do Twojej działalności."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-idealna-strone/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-idealna-strone/" />
    <link
      rel="alternate"
      hrefLang="en"
      href="https://www.nowoczesnawitryna.com/blog/how-to-choose-the-perfect-website/"
    />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Jak wybrać idealną stronę internetową dla Twojej Firmy: One-Page, Multi-Page czy Strona z CMS? - Nowoczesna witryna"
    />
    <meta
      property="og:description"
      content="Wybór odpowiedniego rodzaju strony internetowej jest kluczowy dla sukcesu każdej firmy w internecie. Poznaj różnice i zdecyduj, co najlepiej sprawdzi się u Ciebie."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-idealna-strone/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-idealna-strone/" />
  </>
);
