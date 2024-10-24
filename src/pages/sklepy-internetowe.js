import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import { sklepy_internetowe_txt } from '../consts/texts';
import ServicesInfo from '../components/ServicesInfo/ServicesInfo';
import Prices from '../components/Prices/Prices';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';

const SklepyInternetowe = () => {
  const title = 'Sklepy internetowe';
  const subtitle = 'Sklepy internetowe na miarę Twoich potrzeb!';
  const siteTitle = 'sklepy internetowe - Nowoczesna witryna';
  const siteDescription =
    'Nowoczesna witryna projektuje strony e-commerce, które nie tylko zachwycają designem, ale także zapewniają skuteczną funkcjonalność.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/sklepy-internetowe/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} active="sklep" />
      <ScroolToPriceButton />
      <ScroolUpButton />
      <SiteInfoServices
        title_first_column={sklepy_internetowe_txt.title_first_column}
        title_first_card={sklepy_internetowe_txt.title_first_card}
        title_second_card={sklepy_internetowe_txt.title_second_card}
        descryption_first_column={sklepy_internetowe_txt.descryption_first_column}
        card_descryption={sklepy_internetowe_txt.card_descryption}
        second_card_descryption={sklepy_internetowe_txt.second_card_descryption}
      />
      <ServicesInfo wordpress />
      <Prices sklep />
      <Contact />
      <Footer />
    </>
  );
};

export default SklepyInternetowe;
