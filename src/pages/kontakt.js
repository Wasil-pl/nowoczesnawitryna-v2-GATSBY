import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import { kontakt_txt } from '../consts/texts';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import Faq from '../components/Faq/Faq';

const Kontakt = () => {
  const title_top = 'Skontaktuj';
  const title_middle = 'się ze mną';
  const subtitle = 'Jak mogę Ci pomóc?';
  const siteTitle = 'Kontakt - Nowoczesna Witryna';
  const siteDescription =
    'Skontaktuj się ze mną, aby uzyskać pomoc lub informacje o moich usługach tworzenia stron internetowych, aplikacji webowych i rozwiązań cyfrowych. Zadzwoń lub napisz.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/kontakt/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/contact/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} active="kontakt" />
      <ScroolUpButton />
      <SiteInfoServices
        title_first_column={kontakt_txt.title_first_column}
        descryption_first_column={kontakt_txt.descryption_first_column}
        variant="contact"
      />
      <ContactInfo />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
};

export default Kontakt;
