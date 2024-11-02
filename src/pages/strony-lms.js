import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { strony_lms_txt } from '../consts/texts';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import Prices from '../components/Prices/Prices';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const StronyLMS = () => {
  const title_top = 'Strony LMS';
  const title_middle = 'Nowoczesne Platformy';
  const title_bottom = 'Edukacyjne';
  const subtitle =
    'Tworzę dostosowane platformy LMS do zarządzania kursami, uczniami i materiałami edukacyjnymi – idealne dla szkół, firm szkoleniowych i nauczycieli.';

  const siteTitle = 'Strony LMS – Nowoczesne Platformy Edukacyjne Online';
  const siteDescription =
    'Tworzę strony LMS (Learning Management System), które umożliwiają prowadzenie kursów online, zarządzanie uczniami i materiałami edukacyjnymi. Idealne rozwiązanie dla firm szkoleniowych i instytucji edukacyjnych.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-lms/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="lms"
      />
      <ScroolToPriceButton />
      <ScroolUpButton />
      <SiteInfoServices
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
