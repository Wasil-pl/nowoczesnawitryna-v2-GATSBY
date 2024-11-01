import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import RootLayout from '../components/RootLayout/RootLayout';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footer/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

const PolitykaPrywatnosci = () => {
  const title = 'polityka prywatności';
  const subtitle = 'poczuj się bezpiecznie w sieci';
  const siteTitle = 'polityka prywatności - Nowoczesna witryna';
  const siteDescription =
    'Niniejsza strona korzysta z plików cookie. Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/polityka-prywatnosci/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="blog" />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;
