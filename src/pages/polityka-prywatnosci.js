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
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/privacy-policy/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title} subtitle={subtitle} />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default PolitykaPrywatnosci;
