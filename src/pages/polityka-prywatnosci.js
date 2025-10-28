import * as React from 'react';
import Headers from '../components/Header/Headers/Headers';
import PrivacyPolicy from '../components/Sections/PrivacyPolicy/PrivacyPolicy';

const PolitykaPrywatnosci = () => {
  const title = 'polityka prywatności';
  const subtitle = 'poczuj się bezpiecznie w sieci';

  return (
    <>
      <Headers title_top={title} subtitle={subtitle} />
      <PrivacyPolicy />
    </>
  );
};

export default PolitykaPrywatnosci;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>polityka prywatności - Nowoczesna witryna</title>
    <meta
      name="description"
      content="Niniejsza strona korzysta z plików cookie. Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować"
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/polityka-prywatnosci/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/polityka-prywatnosci/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/privacy-policy/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="polityka prywatności - Nowoczesna witryna" />
    <meta
      property="og:description"
      content="Niniejsza strona korzysta z plików cookie. Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować"
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/polityka-prywatnosci/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/polityka-prywatnosci/" />
  </>
);
