import * as React from 'react';
import Headers from '../components/Header/Headers/Headers';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';
import { kontakt_txt } from '../consts/texts';
import ContactInfo from '../components/Sections/Contact/ContactInfo/ContactInfo';
import Contact from '../components/Sections/Contact/Contact/Contact';
import Faq from '../components/Sections/Shared/Faq/Faq';
import { faqItemsHome } from '../consts/faqItems';

const Kontakt = () => {
  const title_top = 'Skontaktuj';
  const title_middle = 'się ze mną';
  const title_bottom = 'zadzwoń lub napisz';
  const subtitle = 'Jak mogę Ci pomóc?';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} title_bottom={title_bottom} subtitle={subtitle} />
      <ServiceHighlights
        title_first_column={kontakt_txt.title_first_column}
        descryption_first_column={kontakt_txt.descryption_first_column}
        variant="one_column"
      />
      <ContactInfo />
      <Contact />
      <Faq faqItems={faqItemsHome} />
    </>
  );
};

export default Kontakt;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Kontakt - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Skontaktuj się ze mną, aby uzyskać pomoc lub informacje o moich usługach tworzenia stron internetowych, aplikacji webowych i rozwiązań cyfrowych. Zadzwoń lub napisz."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/kontakt/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/kontakt/" />
    <link rel="alternate" hrefLang="en" href="https://www.nowoczesnawitryna.com/contact/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Kontakt - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Skontaktuj się ze mną, aby uzyskać pomoc lub informacje o moich usługach tworzenia stron internetowych, aplikacji webowych i rozwiązań cyfrowych. Zadzwoń lub napisz."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/kontakt/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/kontakt/" />
  </>
);
