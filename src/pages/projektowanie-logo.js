import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { projektowanie_logo_txt } from '../consts/texts';
import Prices from '../components/Prices/Prices';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';
import LogoProcessSteps from '../components/ProcessSteps/LogoProcessSteps';

const ProjektowanieLogo = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Projektowanie';
  const title_bottom = 'Logo';
  const subtitle =
    'Twoje logo to pierwszy krok w budowaniu rozpoznawalnej marki. Oferuję unikalne i spersonalizowane projekty logo, które wyróżnią Twoją firmę na tle konkurencji.';
  const siteTitle = 'Projektowanie Logo – Profesjonalne Logo dla Twojej Firmy';
  const siteDescription =
    'Oferuję projektowanie logo dopasowane do unikalnych potrzeb Twojej marki. Wyróżnij się na tle konkurencji dzięki nowoczesnemu i profesjonalnemu logo, które zapada w pamięć.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/projektowanie-logo/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="logo"
      />
      <ScroolToPriceButton />
      <ScroolUpButton />
      <SiteInfoServices
        title_first_column={projektowanie_logo_txt.title_first_column}
        title_first_card={projektowanie_logo_txt.title_first_card}
        title_second_card={projektowanie_logo_txt.title_second_card}
        descryption_first_column={projektowanie_logo_txt.descryption_first_column}
        card_descryption={projektowanie_logo_txt.card_descryption}
        second_card_descryption={projektowanie_logo_txt.second_card_descryption}
      />
      <LogoProcessSteps />
      <Prices logo />
      <Footer />
    </>
  );
};

export default ProjektowanieLogo;
