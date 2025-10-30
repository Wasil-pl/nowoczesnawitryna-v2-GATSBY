import * as React from 'react';
import Headers from '../../components/Header/Headers/Headers';
import MainPageInfo from '../../components/Sections/LandingPages/MainPageInfo/MainPageInfo';

const StronyInternetowe = ({ pageContext }) => {
  const title_top = 'Tworzę nowoczesne';
  const title_middle = 'strony internetowe';
  const title_bottom = 'W całej Polsce';
  const subtitle =
    'Zaawansowane strony internetowe dla firm, sklepów, blogów, landing page. Optymalizacja pod kątem SEO, szybkość ładowania, responsywność.';

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        crumbs={crumbs}
        crumbLabel="Strony Internetowe"
      />
      <MainPageInfo />
    </>
  );
};

export default StronyInternetowe;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony internetowe - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Tworzę nowoczesne strony internetowe w całej Polsce. Zaawansowane strony internetowe dla firm, sklepów, blogów, landing page. Optymalizacja pod kątem SEO, szybkość ładowania, responsywność."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony internetowe - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Tworzę nowoczesne strony internetowe w całej Polsce. Zaawansowane strony internetowe dla firm, sklepów, blogów, landing page. Optymalizacja pod kątem SEO, szybkość ładowania, responsywność."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/" />
  </>
);
