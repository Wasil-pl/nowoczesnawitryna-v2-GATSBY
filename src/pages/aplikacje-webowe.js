import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { aplikacje_webowe_txt } from '../consts/texts';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import Prices from '../components/Prices/Prices';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const AplikacjeWebowe = () => {
  const title = 'Aplikacje Webowe';
  const subtitle = 'Zaawansowane strony internetowe';
  const siteTitle = 'aplikacje webowe - Nowoczesna witryna';
  const siteDescription =
    'Odkryj innowacyjne aplikacje webowe Wykorzystuje najnowsze technologie, aby stworzyć dla Ciebie aplikację, która zapewni wyjątkowe doświadczenia';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/aplikacje-webowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="aplikacje" />
      <ScroolUpButton />
      <ScroolToPriceButton />
      <SiteInfoServices
        title_first_column={aplikacje_webowe_txt.title_first_column}
        title_first_card={aplikacje_webowe_txt.title_first_card}
        title_second_card={aplikacje_webowe_txt.title_second_card}
        descryption_first_column={aplikacje_webowe_txt.descryption_first_column}
        card_descryption={aplikacje_webowe_txt.card_descryption}
        second_card_descryption={aplikacje_webowe_txt.second_card_descryption}
      />
      <ServicesInfo html />
      <Prices aplikacja />
      <Contact />
      <Footer />
    </>
  );
};

export default AplikacjeWebowe;
