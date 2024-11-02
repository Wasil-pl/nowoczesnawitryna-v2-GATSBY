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
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const AplikacjeWebowe = () => {
  const title_top = 'Aplikacje Webowe';
  const title_middle = 'Nowoczesne Strony';
  const title_bottom = 'dla Twojego Biznesu';
  const subtitle =
    'Tworzę aplikacje webowe dostosowane do potrzeb Twojej firmy, zoptymalizowane i działające płynnie na różnych urządzeniach.';

  const siteTitle = 'Aplikacje Webowe – Nowoczesne Rozwiązania dla Biznesu';
  const siteDescription =
    'Tworzę aplikacje webowe, które zapewniają zaawansowane funkcje i wsparcie dla rozwoju Twojej firmy. Szybkie, bezpieczne i dopasowane do potrzeb biznesowych aplikacje online.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/aplikacje-webowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="aplikacje"
      />
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
      <Footer />
    </>
  );
};

export default AplikacjeWebowe;
