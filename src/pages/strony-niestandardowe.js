import * as React from 'react';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import Headers from '../components/Header/Headers/Headers';
import ScroolUpButton from '../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../components/Footer/Footer';
import ScroolToPriceButton from '../components/Ui/ScroolToPriceButton/ScroolToPriceButton';
import ServicesInfo from '../components/Sections/Shared/ServicesInfo/ServicesInfo';
import Prices from '../components/Sections/Shared/Prices/Prices';
import { strony_niestandardowe_txt } from '../consts/texts';

const StronyNiestandardowe = () => {
  const title_top = 'Strony internetowe';
  const title_middle = '100% programowane';
  const title_bottom = 'w HTML/CSS/JS';
  const subtitle =
    'Tworzę unikatowe strony w czystym HTML, zapewniające pełną kontrolę nad kodem, wysoką wydajność i nieograniczone możliwości dostosowania.';

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="html"
      />
      <ScroolUpButton />
      <ScroolToPriceButton />
      <ServiceHighlights
        title_first_column={strony_niestandardowe_txt.title_first_column}
        title_first_card={strony_niestandardowe_txt.title_first_card}
        title_second_card={strony_niestandardowe_txt.title_second_card}
        descryption_first_column={strony_niestandardowe_txt.descryption_first_column}
        card_descryption={strony_niestandardowe_txt.card_descryption}
        second_card_descryption={strony_niestandardowe_txt.second_card_descryption}
      />
      <ServicesInfo html />
      <Prices html />
      <Footer />
    </>
  );
};

export default StronyNiestandardowe;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony HTML/CSS/JS – Unikalne Rozwiązania Bez CMS</title>
    <meta
      name="description"
      content="Tworzę strony internetowe pisane od zera, bez ograniczeń CMS. Nowoczesne, zoptymalizowane i dostosowane do indywidualnych potrzeb Twojej firmy, idealne do nietypowych projektów."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-niestandardowe/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-niestandardowe/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/custom-websites/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony HTML/CSS/JS – Unikalne Rozwiązania Bez CMS" />
    <meta
      property="og:description"
      content="Tworzę strony internetowe pisane od zera, bez ograniczeń CMS. Nowoczesne, zoptymalizowane i dostosowane do indywidualnych potrzeb Twojej firmy, idealne do nietypowych projektów."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-niestandardowe/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-niestandardowe/" />
  </>
);
