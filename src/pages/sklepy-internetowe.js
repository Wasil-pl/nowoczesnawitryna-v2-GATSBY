import * as React from 'react';
import Headers from '../components/Header/Headers/Headers';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import { sklepy_internetowe_txt } from '../consts/texts';
import Prices from '../components/Sections/Shared/Prices/Prices';
import LastProject from '../components/Sections/Shared/Portfolio/LastProject';
import ServicesInfo from '../components/Sections/Shared/ServicesInfo/ServicesInfo';
import TechnologyIntro from '../components/Sections/Shared/TechnologyIntro/TechnologyIntro';
import ProcessTimeline from '../components/Sections/Shared/ProcessTimeline/ProcessTimeline';
import { ShopProcessSteps } from '../consts/processStepsText';
import WhyMeSection from '../components/Sections/Shared/WhyChooseMe/WhyChooseMe';
import { itemsShop } from '../consts/whyMeSection';
import { faqItemsShop } from '../consts/faqItems';
import Faq from '../components/Sections/Shared/Faq/Faq';

const SklepyInternetowe = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Sklepy Internetowe';
  const title_bottom = 'Rozwijaj Swój Biznes Online';
  const subtitle =
    'Tworzę bezpieczne sklepy WooCommerce z łatwym zarządzaniem produktami i skuteczną sprzedażą online, zgodnie z najnowszymi standardami.';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} subtitle={subtitle} />
      <ServiceHighlights
        title_first_column={sklepy_internetowe_txt.title_first_column}
        title_first_card={sklepy_internetowe_txt.title_first_card}
        title_second_card={sklepy_internetowe_txt.title_second_card}
        descryption_first_column={sklepy_internetowe_txt.descryption_first_column}
        card_descryption={sklepy_internetowe_txt.card_descryption}
        second_card_descryption={sklepy_internetowe_txt.second_card_descryption}
      />
      <ServicesInfo wordpress />
      <TechnologyIntro type={'shop'} />
      <ProcessTimeline steps={ShopProcessSteps} compact={false} />
      <Prices sklep />
      <LastProject />
      <WhyMeSection items={itemsShop} />
      <Faq faqItems={faqItemsShop} />
    </>
  );
};

export default SklepyInternetowe;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Sklepy Internetowe – Rozwijaj Swój Biznes Online</title>
    <meta
      name="description"
      content="Oferuję profesjonalne tworzenie sklepów internetowych opartych na WooCommerce. Funkcjonalne, intuicyjne i bezpieczne rozwiązania e-commerce, które pomogą Ci zwiększyć sprzedaż i zasięg."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/sklepy-internetowe/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/sklepy-internetowe/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/online-stores/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Sklepy Internetowe – Rozwijaj Swój Biznes Online" />
    <meta
      property="og:description"
      content="Oferuję profesjonalne tworzenie sklepów internetowych opartych na WooCommerce. Funkcjonalne, intuicyjne i bezpieczne rozwiązania e-commerce, które pomogą Ci zwiększyć sprzedaż i zasięg."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/sklepy-internetowe/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/sklepy-internetowe/" />
  </>
);
