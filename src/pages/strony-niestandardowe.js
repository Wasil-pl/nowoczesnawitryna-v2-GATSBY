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
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const StronyNiestandardowe = () => {
  const title_top = 'Strony internetowe';
  const title_middle = '100% programowane';
  const title_bottom = 'w HTML/CSS/JS';
  const subtitle =
    'Tworzę w pełni unikatowe strony internetowe oparte na czystym HTML, które zapewniają pełną kontrolę nad kodem, wyjątkową wydajność i nieograniczone możliwości dostosowania do specyficznych potrzeb Twojej firmy.';
  const siteTitle = 'Strony HTML/CSS/JS – Unikalne Rozwiązania Bez CMS';
  const siteDescription =
    'Tworzę strony internetowe pisane od zera, bez ograniczeń CMS. Nowoczesne, zoptymalizowane i dostosowane do indywidualnych potrzeb Twojej firmy, idealne do nietypowych projektów.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-niestandardowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        active="html"
      />
      <ScroolUpButton />
      <ScroolToPriceButton />
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
