import * as React from 'react';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import Headers from '../components/Header/Headers/Headers';
import ServicesInfo from '../components/Sections/Shared/ServicesInfo/ServicesInfo';
import Prices from '../components/Sections/Shared/Prices/Prices';
import { strony_wordpress_txt } from '../consts/texts';
import ProcessTimeline from '../components/Sections/Shared/ProcessTimeline/ProcessTimeline';
import { WordPressProcessSteps } from '../consts/processStepsText';
import Faq from '../components/Sections/Shared/Faq/Faq';
import { faqItemsWordPress } from '../consts/faqItems';
import WhyMeSection from '../components/Sections/Shared/WhyChooseMe/WhyChooseMe';
import TechnologyIntro from '../components/Sections/Shared/TechnologyIntro/TechnologyIntro';
import { itemsWordpress } from '../consts/whyMeSection';

const StronyWordpress = () => {
  const title_top = 'Profesjonalne';
  const title_middle = 'Strony Internetowe';
  const title_bottom = 'oparte na WordPress';
  const subtitle =
    'Tworzę nowoczesne, funkcjonalne strony WordPress – łatwe w zarządzaniu, szybkie we wdrożeniu i dostosowane do Twojego biznesu.';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} subtitle={subtitle} />
      <ServiceHighlights
        title_first_column={strony_wordpress_txt.title_first_column}
        title_first_card={strony_wordpress_txt.title_first_card}
        title_second_card={strony_wordpress_txt.title_second_card}
        descryption_first_column={strony_wordpress_txt.descryption_first_column}
        card_descryption={strony_wordpress_txt.card_descryption}
        second_card_descryption={strony_wordpress_txt.second_card_descryption}
      />
      <ServicesInfo wordpress />
      <TechnologyIntro type={'wordpress'} />
      <ProcessTimeline steps={WordPressProcessSteps} compact={false} />
      <Prices wordpress />
      <WhyMeSection items={itemsWordpress} />
      <Faq faqItems={faqItemsWordPress} />
    </>
  );
};

export default StronyWordpress;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony WordPress – Łatwe w Zarządzaniu i Efektywne Strony</title>
    <meta
      name="description"
      content="Specjalizuję się w tworzeniu stron opartych na WordPress – popularnym i elastycznym systemie CMS. Responsywne, zoptymalizowane i łatwe w obsłudze rozwiązania dla firm każdej wielkości."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-wordpress/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-wordpress/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/wordpress-websites/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony WordPress – Łatwe w Zarządzaniu i Efektywne Strony" />
    <meta
      property="og:description"
      content="Specjalizuję się w tworzeniu stron opartych na WordPress – popularnym i elastycznym systemie CMS. Responsywne, zoptymalizowane i łatwe w obsłudze rozwiązania dla firm każdej wielkości."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-wordpress/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-wordpress/" />
  </>
);
