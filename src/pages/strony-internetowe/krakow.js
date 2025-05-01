import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import {
  about_me_krakow,
  krakow_info_txt,
  krakow_myService,
  krakow_processSteps,
  krakow_websiteFunctions,
  portfolioTitle,
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

const krakow = () => {
  const title_top = 'Nowoczesne i funkcjonalne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm w Krakowie';
  const subtitle =
    'Tworzę strony, które łączą unikalny design z doskonałą funkcjonalnością, pomagając firmom z Krakowa skutecznie zaistnieć w internecie.';

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
        title_first={krakow_info_txt.title_first}
        description_first={krakow_info_txt.description_first}
        title_second={krakow_info_txt.title_second}
        description_second={krakow_info_txt.description_second}
        title_third={krakow_info_txt.title_third}
        description_third={krakow_info_txt.description_third}
        banner_description={krakow_info_txt.banner_description}
      />
      <LPMyServices
        sectionTitle={krakow_myService.sectionTitle}
        sectionTitleColored={krakow_myService.sectionTitleColored}
        title_HTML={krakow_myService.title_html}
        description_HTML={krakow_myService.description_html}
        title_web_apps={krakow_myService.title_web_apps}
        description_web_apps={krakow_myService.description_web_apps}
        title_wordpress={krakow_myService.title_wordpress}
        description_wordpress={krakow_myService.description_wordpress}
        title_ecommerce={krakow_myService.title_ecommerce}
        description_ecommerce={krakow_myService.description_ecommerce}
        title_lms={krakow_myService.title_lms}
        description_lms={krakow_myService.description_lms}
        title_logo={krakow_myService.title_logo}
        description_logo={krakow_myService.description_logo}
      />
      <LPAboutMe description={about_me_krakow.description} />
      <LPWebsiteFunctions
        sectionTitle={krakow_websiteFunctions.sectionTitle}
        sectionTitleColored={krakow_websiteFunctions.sectionTitleColored}
        sectionSubtitle={krakow_websiteFunctions.sectionSubtitle}
        itemTitle1={krakow_websiteFunctions.items[0].title}
        itemDescription1={krakow_websiteFunctions.items[0].description}
        itemTitle2={krakow_websiteFunctions.items[1].title}
        itemDescription2={krakow_websiteFunctions.items[1].description}
        itemTitle3={krakow_websiteFunctions.items[2].title}
        itemDescription3={krakow_websiteFunctions.items[2].description}
        itemTitle4={krakow_websiteFunctions.items[3].title}
        itemDescription4={krakow_websiteFunctions.items[3].description}
        itemTitle5={krakow_websiteFunctions.items[4].title}
        itemDescription5={krakow_websiteFunctions.items[4].description}
        itemTitle6={krakow_websiteFunctions.items[5].title}
        itemDescription6={krakow_websiteFunctions.items[5].description}
        itemTitle7={krakow_websiteFunctions.items[6].title}
        itemDescription7={krakow_websiteFunctions.items[6].description}
        itemTitle8={krakow_websiteFunctions.items[7].title}
        itemDescription8={krakow_websiteFunctions.items[7].description}
      />

      <LPAction />

      <LPProcessSteps
        sectionTitle={krakow_processSteps.sectionTitle}
        sectionTitleColored={krakow_processSteps.sectionTitleColored}
        step1Title={krakow_processSteps.steps[0].title}
        step1Description={krakow_processSteps.steps[0].description}
        step2Title={krakow_processSteps.steps[1].title}
        step2Description={krakow_processSteps.steps[1].description}
        step3Title={krakow_processSteps.steps[2].title}
        step3Description={krakow_processSteps.steps[2].description}
        step4Title={krakow_processSteps.steps[3].title}
        step4Description={krakow_processSteps.steps[3].description}
        step5Title={krakow_processSteps.steps[4].title}
        step5Description={krakow_processSteps.steps[4].description}
        step6Title={krakow_processSteps.steps[5].title}
        step6Description={krakow_processSteps.steps[5].description}
      />

      <LPPortfolio
        title={portfolioTitle.krakow.title}
        coloredText={portfolioTitle.krakow.coloredText}
        subtitle={portfolioTitle.krakow.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default krakow;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony internetowe Kraków - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Oferuję profesjonalne usługi tworzenia stron internetowych w Krakowie. Moje projekty łączą nowoczesny design, intuicyjną obsługę i optymalizację pod kątem wyszukiwarek. Skontaktuj się ze mną, aby stworzyć stronę, która wyróżni Twoją firmę na tle konkurencji."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/krakow/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-internetowe/krakow/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony internetowe Kraków - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Oferuję profesjonalne usługi tworzenia stron internetowych w Krakowie. Moje projekty łączą nowoczesny design, intuicyjną obsługę i optymalizację pod kątem wyszukiwarek. Skontaktuj się ze mną, aby stworzyć stronę, która wyróżni Twoją firmę na tle konkurencji."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/krakow/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/krakow/" />
  </>
);
