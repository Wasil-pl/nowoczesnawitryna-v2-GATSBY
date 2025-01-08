import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import SiteInfoServices from '../../components/SiteInfoServices/SiteInfoServices';
import { poznan_info_txt, poznan_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

const poznan = () => {
  const title_top = 'Nowoczesne i efektywne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Poznania';
  const subtitle =
    'Specjalizuję się w tworzeniu stron internetowych, które wspierają firmy z Poznania w budowaniu profesjonalnego wizerunku i pozyskiwaniu klientów online.';

  const siteTitle = 'Tworzenie stron internetowych Poznań - Nowoczesna Witryna';
  const siteDescription =
    'Oferuję profesjonalne usługi tworzenia stron internetowych w Poznaniu. Moje projekty wyróżniają się estetyką, funkcjonalnością i optymalizacją SEO, co pozwala Twojej firmie skutecznie zaistnieć w internecie. Skontaktuj się, aby stworzyć stronę, która wzmocni Twoją obecność online i przyciągnie nowych klientów.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/poznan/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        variant={'landing_page'}
      />
      <SiteInfoServices
        title_first_column={poznan_info_txt.title_first_column}
        descryption_first_column={poznan_info_txt.descryption_first_column}
        variant="one_column"
      />
      <LP_MyServices
        sectionTitle={poznan_myService.sectionTitle}
        sectionTitleColored={poznan_myService.sectionTitleColored}
        title_HTML={poznan_myService.title_html}
        description_HTML={poznan_myService.description_html}
        title_web_apps={poznan_myService.title_web_apps}
        description_web_apps={poznan_myService.description_web_apps}
        title_wordpress={poznan_myService.title_wordpress}
        description_wordpress={poznan_myService.description_wordpress}
        title_ecommerce={poznan_myService.title_ecommerce}
        description_ecommerce={poznan_myService.description_ecommerce}
        title_lms={poznan_myService.title_lms}
        description_lms={poznan_myService.description_lms}
        title_logo={poznan_myService.title_logo}
        description_logo={poznan_myService.description_logo}
      />
      <WhyMe
        title_first_row={whyMeContent.poznan[0].title}
        description_first_row={whyMeContent.poznan[0].description}
        title_second_row={whyMeContent.poznan[1].title}
        description_second_row={whyMeContent.poznan[1].description}
        title_third_row={whyMeContent.poznan[2].title}
        description_third_row={whyMeContent.poznan[2].description}
        title_fourth_row={whyMeContent.poznan[3].title}
        description_fourth_row={whyMeContent.poznan[3].description}
        title_fifth_row={whyMeContent.poznan[4].title}
        description_fifth_row={whyMeContent.poznan[4].description}
        title_sixth_row={whyMeContent.poznan[5].title}
        description_sixth_row={whyMeContent.poznan[5].description}
        title_seventh_row={whyMeContent.poznan[6].title}
        description_seventh_row={whyMeContent.poznan[6].description}
        title_eighth_row={whyMeContent.poznan[7].title}
        description_eighth_row={whyMeContent.poznan[7].description}
        title_ninth_row={whyMeContent.poznan[8].title}
        description_ninth_row={whyMeContent.poznan[8].description}
        title_tenth_row={whyMeContent.poznan[9].title}
        description_tenth_row={whyMeContent.poznan[9].description}
      />

      <LP_Action />

      <LP_Portfolio
        title={portfolioTitle.poznan.title}
        coloredText={portfolioTitle.poznan.coloredText}
        subtitle={portfolioTitle.poznan.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default poznan;
