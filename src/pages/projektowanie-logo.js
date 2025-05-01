import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Header/Headers/Headers';
import ScroolUpButton from '../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../components/Footer/Footer';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import Prices from '../components/Sections/Shared/Prices/Prices';
import ScroolToPriceButton from '../components/Ui/ScroolToPriceButton/ScroolToPriceButton';
import LogoProcessSteps from '../components/Sections/Logo/LogoCreateProcessSteps/LogoProcessSteps';
import { projektowanie_logo_txt } from '../consts/texts';

const ProjektowanieLogo = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Projektowanie';
  const title_bottom = 'Logo';
  const subtitle =
    'Twoje logo to pierwszy krok w budowaniu rozpoznawalnej marki. Oferuję unikalne i spersonalizowane projekty logo, które wyróżnią Twoją firmę na tle konkurencji.';

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="logo"
      />
      <ScroolToPriceButton />
      <ScroolUpButton />
      <ServiceHighlights
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

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Projektowanie Logo – Profesjonalne Logo dla Twojej Firmy</title>
    <meta
      name="description"
      content="Oferuję projektowanie logo dopasowane do unikalnych potrzeb Twojej marki. Wyróżnij się na tle konkurencji dzięki nowoczesnemu i profesjonalnemu logo, które zapada w pamięć."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/projektowanie-logo/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/projektowanie-logo/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/logo-design/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Projektowanie Logo – Profesjonalne Logo dla Twojej Firmy" />
    <meta
      property="og:description"
      content="Oferuję projektowanie logo dopasowane do unikalnych potrzeb Twojej marki. Wyróżnij się na tle konkurencji dzięki nowoczesnemu i profesjonalnemu logo, które zapada w pamięć."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/projektowanie-logo/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/projektowanie-logo/" />
  </>
);
