import * as React from 'react';
import { aplikacje_webowe_txt } from '../consts/texts';
import Headers from '../components/Header/Headers/Headers';
import Prices from '../components/Sections/Shared/Prices/Prices';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import ServicesInfo from '../components/Sections/Shared/ServicesInfo/ServicesInfo';

const AplikacjeWebowe = () => {
  const title_top = 'Aplikacje Webowe';
  const title_middle = 'Nowoczesne Strony';
  const title_bottom = 'dla Twojego Biznesu';
  const subtitle =
    'Tworzę aplikacje webowe dostosowane do potrzeb Twojej firmy, zoptymalizowane i działające płynnie na różnych urządzeniach.';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} subtitle={subtitle} />
      <ServiceHighlights
        title_first_column={aplikacje_webowe_txt.title_first_column}
        title_first_card={aplikacje_webowe_txt.title_first_card}
        title_second_card={aplikacje_webowe_txt.title_second_card}
        descryption_first_column={aplikacje_webowe_txt.descryption_first_column}
        card_descryption={aplikacje_webowe_txt.card_descryption}
        second_card_descryption={aplikacje_webowe_txt.second_card_descryption}
      />
      <ServicesInfo html />
      <Prices aplikacja />
    </>
  );
};

export default AplikacjeWebowe;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Aplikacje Webowe – Nowoczesne Rozwiązania dla Biznesu</title>
    <meta
      name="description"
      content="Tworzę aplikacje webowe, które zapewniają zaawansowane funkcje i wsparcie dla rozwoju Twojej firmy. Szybkie, bezpieczne i dopasowane do potrzeb biznesowych aplikacje online."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/aplikacje-webowe/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/aplikacje-webowe/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/web-applications/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Aplikacje Webowe – Nowoczesne Rozwiązania dla Biznesu" />
    <meta
      property="og:description"
      content="Tworzę aplikacje webowe, które zapewniają zaawansowane funkcje i wsparcie dla rozwoju Twojej firmy. Szybkie, bezpieczne i dopasowane do potrzeb biznesowych aplikacje online."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/aplikacje-webowe/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/aplikacje-webowe/" />
  </>
);
