import * as React from 'react';
import {
  poznan_info_txt,
  poznan_myService,
  portfolioTitle,
  about_me_poznan,
  poznan_websiteFunctions,
  poznan_processSteps,
} from '../../consts/landingPage';
import Headers from '../../components/Header/Headers/Headers';
import ScroolUpButton from '../../components/Ui/ScroolUpButton/ScroolUpButton';
import Footer from '../../components/Footer/Footer';
import LPSiteInfo from '../../components/Sections/LandingPages/LPSiteInfo/LPSiteInfo';
import LPMyServices from '../../components/Sections/LandingPages/LPMyServices/LPMyServices';
import LPAboutMe from '../../components/Sections/LandingPages/LPAboutMe/LPAboutMe';
import LPWebsiteFunctions from '../../components/Sections/LandingPages/LPWebsiteFunctions/LPWebsiteFunctions';
import LPProcessSteps from '../../components/Sections/LandingPages/LPProcessSteps/LPProcessSteps';
import LPPortfolio from '../../components/Sections/LandingPages/LPPortfolio/LPPortfolio';
import LPAction from '../../components/Sections/LandingPages/LPAction/LPAction';

const poznan = () => {
  const title_top = 'Nowoczesne i efektywne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Poznania';
  const subtitle =
    'Specjalizuję się w tworzeniu stron internetowych, które wspierają firmy z Poznania w budowaniu profesjonalnego wizerunku i pozyskiwaniu klientów online.';

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        variant={'landing_page'}
      />
      <LPSiteInfo
        title_first={poznan_info_txt.title_first}
        description_first={poznan_info_txt.description_first}
        title_second={poznan_info_txt.title_second}
        description_second={poznan_info_txt.description_second}
        title_third={poznan_info_txt.title_third}
        description_third={poznan_info_txt.description_third}
        banner_description={poznan_info_txt.banner_description}
      />
      <LPMyServices
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
      <LPAboutMe description={about_me_poznan.description} />
      <LPWebsiteFunctions
        sectionTitle={poznan_websiteFunctions.sectionTitle}
        sectionTitleColored={poznan_websiteFunctions.sectionTitleColored}
        sectionSubtitle={poznan_websiteFunctions.sectionSubtitle}
        itemTitle1={poznan_websiteFunctions.items[0].title}
        itemDescription1={poznan_websiteFunctions.items[0].description}
        itemTitle2={poznan_websiteFunctions.items[1].title}
        itemDescription2={poznan_websiteFunctions.items[1].description}
        itemTitle3={poznan_websiteFunctions.items[2].title}
        itemDescription3={poznan_websiteFunctions.items[2].description}
        itemTitle4={poznan_websiteFunctions.items[3].title}
        itemDescription4={poznan_websiteFunctions.items[3].description}
        itemTitle5={poznan_websiteFunctions.items[4].title}
        itemDescription5={poznan_websiteFunctions.items[4].description}
        itemTitle6={poznan_websiteFunctions.items[5].title}
        itemDescription6={poznan_websiteFunctions.items[5].description}
        itemTitle7={poznan_websiteFunctions.items[6].title}
        itemDescription7={poznan_websiteFunctions.items[6].description}
        itemTitle8={poznan_websiteFunctions.items[7].title}
        itemDescription8={poznan_websiteFunctions.items[7].description}
      />
      <LPAction />

      <LPProcessSteps
        sectionTitle={poznan_processSteps.sectionTitle}
        sectionTitleColored={poznan_processSteps.sectionTitleColored}
        step1Title={poznan_processSteps.steps[0].title}
        step1Description={poznan_processSteps.steps[0].description}
        step2Title={poznan_processSteps.steps[1].title}
        step2Description={poznan_processSteps.steps[1].description}
        step3Title={poznan_processSteps.steps[2].title}
        step3Description={poznan_processSteps.steps[2].description}
        step4Title={poznan_processSteps.steps[3].title}
        step4Description={poznan_processSteps.steps[3].description}
        step5Title={poznan_processSteps.steps[4].title}
        step5Description={poznan_processSteps.steps[4].description}
        step6Title={poznan_processSteps.steps[5].title}
        step6Description={poznan_processSteps.steps[5].description}
      />

      <LPPortfolio
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

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Tworzenie stron internetowych Poznań - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Oferuję profesjonalne usługi tworzenia stron internetowych w Poznaniu. Moje projekty wyróżniają się estetyką, funkcjonalnością i optymalizacją SEO, co pozwala Twojej firmie skutecznie zaistnieć w internecie. Skontaktuj się, aby stworzyć stronę, która wzmocni Twoją obecność online i przyciągnie nowych klientów."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/poznan/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-internetowe/poznan/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tworzenie stron internetowych Poznań - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Oferuję profesjonalne usługi tworzenia stron internetowych w Poznaniu. Moje projekty wyróżniają się estetyką, funkcjonalnością i optymalizacją SEO, co pozwala Twojej firmie skutecznie zaistnieć w internecie. Skontaktuj się, aby stworzyć stronę, która wzmocni Twoją obecność online i przyciągnie nowych klientów."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/poznan/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/poznan/" />
  </>
);
