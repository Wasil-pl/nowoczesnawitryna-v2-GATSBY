import * as React from 'react';
import Headers from '../../components/Header/Headers/Headers';
import BlogArticleCms from '../../components/Sections/Blog/BlogArticles/BlogArticleCms';

const BlogCMS = () => {
  const title_top = 'Cms vs strona';
  const title_middle = 'pisana od podstaw';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <BlogArticleCms />
    </>
  );
};

export default BlogCMS;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Cms vs strona pisana od podstaw - Nowoczesna witryna</title>
    <meta
      name="description"
      content="Cms vs strona pisana od podstaw - Ten artykuł pomoże Ci zdecydować, czy lepiej jest postawić na stronę internetową pisana od podstaw, czy na system CMS."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/cms-vs-strona-pisana-od-podstaw/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/blog/cms-vs-strona-pisana-od-podstaw/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/blog/cms-vs-custom-built-website/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Cms vs strona pisana od podstaw" />
    <meta
      property="og:description"
      content="Ten artykuł pomoże Ci zdecydować, czy lepiej jest postawić na stronę internetową pisana od podstaw, czy na system CMS."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/blog/cms-vs-strona-pisana-od-podstaw/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/cms-vs-strona-pisana-od-podstaw/" />
  </>
);
