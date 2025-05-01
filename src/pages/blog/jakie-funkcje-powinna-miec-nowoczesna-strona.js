import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import Headers from '../../components/Header/Headers/Headers';
import ScroolUpButton from '../../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../../components/Footer/Footer';
import BlogArticleModernWebsiteFeatures from '../../components/Sections/Blog/BlogArticles/BlogModernWebsiteFeatures';

const BlogModernWebsite = () => {
  const title_top = 'Jakie Funkcje Powinna Mieć';
  const title_middle = 'Nowoczesna Strona Internetowa?';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} active="blog" />
      <ScroolUpButton />
      <BlogArticleModernWebsiteFeatures />
      <Footer />
    </>
  );
};

export default BlogModernWebsite;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Jakie Funkcje Powinna Mieć Nowoczesna Strona Internetowa? - Nowoczesna witryna</title>
    <meta
      name="description"
      content="Jakie Funkcje Powinna Mieć Nowoczesna Strona Internetowa? - artykuł ten pomoże Ci w dokonaniu prawidłowego wyboru, bo wbrew pozorom są to bardzo ważne kwestie..."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/blog/jakie-funkcje-powinna-miec-nowoczesna-strona/" />
    <link
      rel="alternate"
      hrefLang="pl"
      href="https://www.nowoczesnawitryna.pl/blog/jakie-funkcje-powinna-miec-nowoczesna-strona/"
    />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/blog/features-of-a-modern-website/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Jakie Funkcje Powinna Mieć Nowoczesna Strona Internetowa? - Nowoczesna witryna"
    />
    <meta
      property="og:description"
      content="Poznaj kluczowe funkcje nowoczesnej strony internetowej, które wpływają na jej skuteczność, użyteczność i odbiór przez użytkowników oraz wyszukiwarki."
    />
    <meta
      property="og:url"
      content="https://www.nowoczesnawitryna.pl/blog/jakie-funkcje-powinna-miec-nowoczesna-strona/"
    />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/blog/jakie-funkcje-powinna-miec-nowoczesna-strona/" />
  </>
);
