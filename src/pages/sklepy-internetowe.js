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
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../components/ScroolToPriceButton/ScroolToPriceButton';
import LastProject from '../components/Portfolio/LastProject';

const SklepyInternetowe = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Sklepy Internetowe';
  const subtitle =
    'Tworzę bezpieczne sklepy WooCommerce z łatwym zarządzaniem produktami i skuteczną sprzedażą online, zgodnie z najnowszymi standardami.';
  const siteTitle = 'Sklepy Internetowe – Rozwijaj Swój Biznes Online';
  const siteDescription =
    'Oferuję profesjonalne tworzenie sklepów internetowych opartych na WooCommerce. Funkcjonalne, intuicyjne i bezpieczne rozwiązania e-commerce, które pomogą Ci zwiększyć sprzedaż i zasięg.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/sklepy-internetowe/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/online-stores/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} active="sklep" />
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
      <LastProject />
      <Footer />
    </>
  );
};

export default SklepyInternetowe;
