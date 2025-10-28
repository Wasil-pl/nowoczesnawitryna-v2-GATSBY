import * as React from 'react';
import Headers from '../../components/Header/Headers/Headers';
import BlogArticleHosting from '../../components/Sections/Blog/BlogArticles/BlogArticleHosting';

const BlogHosting = () => {
  const title_top = 'Jak wybrać najlepszy';
  const title_middle = 'hosting i domenę';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <BlogArticleHosting />
    </>
  );
};

export default BlogHosting;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Jak wybrać najlepszy hosting i domenę - Nowoczesna witryna</title>
    <meta
      name="description"
      content="Jak wybrać najlepszy hosting i domenę - artykuł ten pomoże Ci w dokonaniu prawidłowego wyboru, bo wbrew pozorom są to bardzo ważne kwestie..."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-najlepszy-hosting-i-domene/" />
    <link
      rel="alternate"
      hrefLang="pl"
      href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-najlepszy-hosting-i-domene/"
    />
    <link
      rel="alternate"
      hrefLang="en"
      href="https://www.nowoczesnawitryna.com/blog/how-to-choose-the-best-hosting-and-domain/"
    />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Jak wybrać najlepszy hosting i domenę - Nowoczesna witryna" />
    <meta
      property="og:description"
      content="Dowiedz się, jak wybrać hosting i domenę – na co zwrócić uwagę, by Twoja strona działała szybko, stabilnie i była dobrze widoczna w sieci."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-najlepszy-hosting-i-domene/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/jak-wybrac-najlepszy-hosting-i-domene/" />
  </>
);
