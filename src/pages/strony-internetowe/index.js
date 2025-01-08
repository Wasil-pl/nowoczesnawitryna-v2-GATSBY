import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import MainPageInfo from '../../components/LandingPages/MainPageInfo/MainPageInfo';

const StronyInternetowe = () => {
  const title_top = 'Tworzę nowoczesne';
  const title_middle = 'strony internetowe';
  const title_bottom = 'W całej Polsce';
  const subtitle =
    'Zaawansowane strony internetowe dla firm, sklepów, blogów, landing page. Optymalizacja pod kątem SEO, szybkość ładowania, responsywność.';

  const siteTitle = 'Strony internetowe - Nowoczesna Witryna';
  const siteDescription =
    'Tworzę nowoczesne strony internetowe w całej Polsce. Zaawansowane strony internetowe dla firm, sklepów, blogów, landing page. Optymalizacja pod kątem SEO, szybkość ładowania, responsywność.';

  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/strony-internetowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} subtitle={subtitle} />
      <MainPageInfo />
      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default StronyInternetowe;
