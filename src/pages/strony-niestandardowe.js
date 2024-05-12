import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { strony_niestandardowe_txt } from '../consts/texts';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import Prices from '../components/Prices/Prices';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';

const StronyNiestandardowe = () => {
  const title = 'Strony niestandardowe';
  const subtitle = 'Zrealizuję każdy projekt!';
  const siteTitle = 'strony niestandardowe - Nowoczesna witryna';
  const siteDescription =
    'Tworzę niestandardowe strony internetowe oparte na czystym HTML, które spełniają Twoje unikalne wymagania. Nowoczesna witryna będzie w tym pomocna.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-niestandardowe';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="html" />
      <SiteInfoServices
        title_first_column={strony_niestandardowe_txt.title_first_column}
        title_first_card={strony_niestandardowe_txt.title_first_card}
        title_second_card={strony_niestandardowe_txt.title_second_card}
        descryption_first_column={strony_niestandardowe_txt.descryption_first_column}
        card_descryption={strony_niestandardowe_txt.card_descryption}
        second_card_descryption={strony_niestandardowe_txt.second_card_descryption}
      />
      <ServicesInfo html />
      <Prices html />
      <Contact />
      <Footer />
    </>
  );
};

export default StronyNiestandardowe;
