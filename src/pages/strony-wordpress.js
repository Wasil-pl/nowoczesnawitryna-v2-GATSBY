import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { strony_wordpress_txt } from '../consts/texts';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import Prices from '../components/Prices/Prices';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const StronyWordpress = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Strony Internetowe';
  const title_bottom = 'oparte na WordPress';
  const subtitle =
    'Tworzę nowoczesne, funkcjonalne strony WordPress – łatwe w zarządzaniu, szybkie we wdrożeniu i dostosowane do Twojego biznesu.';

  const siteTitle = 'Strony WordPress – Łatwe w Zarządzaniu i Efektywne Strony';
  const siteDescription =
    'Specjalizuję się w tworzeniu stron opartych na WordPress – popularnym i elastycznym systemie CMS. Responsywne, zoptymalizowane i łatwe w obsłudze rozwiązania dla firm każdej wielkości.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-wordpress/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/wordpress-websites/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="wordpress"
      />
      <ScroolUpButton />
      <ScroolToPriceButton />
      <SiteInfoServices
        title_first_column={strony_wordpress_txt.title_first_column}
        title_first_card={strony_wordpress_txt.title_first_card}
        title_second_card={strony_wordpress_txt.title_second_card}
        descryption_first_column={strony_wordpress_txt.descryption_first_column}
        card_descryption={strony_wordpress_txt.card_descryption}
        second_card_descryption={strony_wordpress_txt.second_card_descryption}
      />
      <ServicesInfo wordpress />
      <Prices wordpress />
      <Footer />
    </>
  );
};

export default StronyWordpress;
