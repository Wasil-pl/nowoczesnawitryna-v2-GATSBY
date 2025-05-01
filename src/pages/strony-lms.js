import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import Headers from '../components/Header/Headers/Headers';
import ScroolUpButton from '../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../components/Footer/Footer';
import ScroolToPriceButton from '../components/Ui/ScroolToPriceButton/ScroolToPriceButton';
import ServicesInfo from '../components/Sections/Shared/ServicesInfo/ServicesInfo';
import Prices from '../components/Sections/Shared/Prices/Prices';
import { strony_lms_txt } from '../consts/texts';

const StronyLMS = () => {
  const title_top = 'Strony LMS';
  const title_middle = 'Nowoczesne Platformy';
  const title_bottom = 'Edukacyjne';
  const subtitle =
    'Tworzę dostosowane platformy LMS do zarządzania kursami, uczniami i materiałami edukacyjnymi – idealne dla szkół, firm szkoleniowych i nauczycieli.';

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="lms"
      />
      <ScroolToPriceButton />
      <ScroolUpButton />
      <ServiceHighlights
        title_first_column={strony_lms_txt.title_first_column}
        title_first_card={strony_lms_txt.title_first_card}
        title_second_card={strony_lms_txt.title_second_card}
        descryption_first_column={strony_lms_txt.descryption_first_column}
        card_descryption={strony_lms_txt.card_descryption}
        second_card_descryption={strony_lms_txt.second_card_descryption}
      />
      <ServicesInfo wordpress />
      <Prices lms />
      <Footer />
    </>
  );
};

export default StronyLMS;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony LMS – Nowoczesne Platformy Edukacyjne Online</title>
    <meta
      name="description"
      content="Tworzę strony LMS (Learning Management System), które umożliwiają prowadzenie kursów online, zarządzanie uczniami i materiałami edukacyjnymi. Idealne rozwiązanie dla firm szkoleniowych i instytucji edukacyjnych."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-lms/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-lms/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/lms-websites/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony LMS – Nowoczesne Platformy Edukacyjne Online" />
    <meta
      property="og:description"
      content="Tworzę strony LMS (Learning Management System), które umożliwiają prowadzenie kursów online, zarządzanie uczniami i materiałami edukacyjnymi. Idealne rozwiązanie dla firm szkoleniowych i instytucji edukacyjnych."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-lms/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-lms/" />
  </>
);
