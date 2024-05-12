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
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';

const StronyWordpress = () => {
  const title = 'Strony WordPress';
  const subtitle = 'Zrealizuję każdy projekt!';
  const siteTitle = 'strony WordPress - Nowoczesna witryna';
  const siteDescription =
    'Nowoczesna witryna to miejsce gdzie stworzysz swoją wymarzoną stronę opartą na najbardziej popularnym systemie zarządzania treścią WordPress.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-wordpress';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="wordpress" />
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
      <Contact />
      <Footer />
    </>
  );
};

export default StronyWordpress;
