import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import {
  warszawa_info_txt,
  warszawa_myService,
  portfolioTitle,
  about_me_warszawa,
  warszawa_websiteFunctions,
  warszawa_processSteps,
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

const warszawa = () => {
  const title_top = 'Profesjonalne i nowoczesne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm w Warszawie';
  const subtitle =
    'Tworzę strony internetowe, które łączą innowacyjny design z zaawansowaną funkcjonalnością, pomagając firmom z Warszawy skutecznie budować swoją obecność w internecie.';

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
        title_first={warszawa_info_txt.title_first}
        description_first={warszawa_info_txt.description_first}
        title_second={warszawa_info_txt.title_second}
        description_second={warszawa_info_txt.description_second}
        title_third={warszawa_info_txt.title_third}
        description_third={warszawa_info_txt.description_third}
        banner_description={warszawa_info_txt.banner_description}
      />
      <LPMyServices
        sectionTitle={warszawa_myService.sectionTitle}
        sectionTitleColored={warszawa_myService.sectionTitleColored}
        title_HTML={warszawa_myService.title_html}
        description_HTML={warszawa_myService.description_html}
        title_web_apps={warszawa_myService.title_web_apps}
        description_web_apps={warszawa_myService.description_web_apps}
        title_wordpress={warszawa_myService.title_wordpress}
        description_wordpress={warszawa_myService.description_wordpress}
        title_ecommerce={warszawa_myService.title_ecommerce}
        description_ecommerce={warszawa_myService.description_ecommerce}
        title_lms={warszawa_myService.title_lms}
        description_lms={warszawa_myService.description_lms}
        title_logo={warszawa_myService.title_logo}
        description_logo={warszawa_myService.description_logo}
      />
      <LPAboutMe description={about_me_warszawa.description} />
      <LPWebsiteFunctions
        sectionTitle={warszawa_websiteFunctions.sectionTitle}
        sectionTitleColored={warszawa_websiteFunctions.sectionTitleColored}
        sectionSubtitle={warszawa_websiteFunctions.sectionSubtitle}
        itemTitle1={warszawa_websiteFunctions.items[0].title}
        itemDescription1={warszawa_websiteFunctions.items[0].description}
        itemTitle2={warszawa_websiteFunctions.items[1].title}
        itemDescription2={warszawa_websiteFunctions.items[1].description}
        itemTitle3={warszawa_websiteFunctions.items[2].title}
        itemDescription3={warszawa_websiteFunctions.items[2].description}
        itemTitle4={warszawa_websiteFunctions.items[3].title}
        itemDescription4={warszawa_websiteFunctions.items[3].description}
        itemTitle5={warszawa_websiteFunctions.items[4].title}
        itemDescription5={warszawa_websiteFunctions.items[4].description}
        itemTitle6={warszawa_websiteFunctions.items[5].title}
        itemDescription6={warszawa_websiteFunctions.items[5].description}
        itemTitle7={warszawa_websiteFunctions.items[6].title}
        itemDescription7={warszawa_websiteFunctions.items[6].description}
        itemTitle8={warszawa_websiteFunctions.items[7].title}
        itemDescription8={warszawa_websiteFunctions.items[7].description}
      />

      <LPAction />

      <LPProcessSteps
        sectionTitle={warszawa_processSteps.sectionTitle}
        sectionTitleColored={warszawa_processSteps.sectionTitleColored}
        step1Title={warszawa_processSteps.steps[0].title}
        step1Description={warszawa_processSteps.steps[0].description}
        step2Title={warszawa_processSteps.steps[1].title}
        step2Description={warszawa_processSteps.steps[1].description}
        step3Title={warszawa_processSteps.steps[2].title}
        step3Description={warszawa_processSteps.steps[2].description}
        step4Title={warszawa_processSteps.steps[3].title}
        step4Description={warszawa_processSteps.steps[3].description}
        step5Title={warszawa_processSteps.steps[4].title}
        step5Description={warszawa_processSteps.steps[4].description}
        step6Title={warszawa_processSteps.steps[5].title}
        step6Description={warszawa_processSteps.steps[5].description}
      />

      <LPPortfolio
        title={portfolioTitle.warszawa.title}
        coloredText={portfolioTitle.warszawa.coloredText}
        subtitle={portfolioTitle.warszawa.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default warszawa;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Strony internetowe Warszawa - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Oferuję kompleksowe usługi tworzenia stron internetowych w Warszawie. Moje projekty wyróżniają się nowoczesnym wyglądem, łatwością obsługi i optymalizacją SEO, wspierając rozwój Twojej firmy online. Skontaktuj się ze mną, aby stworzyć stronę, która przyciągnie uwagę i zwiększy widoczność w internecie."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/warszawa/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-internetowe/warszawa/" />
    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Strony internetowe Warszawa - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Oferuję kompleksowe usługi tworzenia stron internetowych w Warszawie. Moje projekty wyróżniają się nowoczesnym wyglądem, łatwością obsługi i optymalizacją SEO, wspierając rozwój Twojej firmy online. Skontaktuj się ze mną, aby stworzyć stronę, która przyciągnie uwagę i zwiększy widoczność w internecie."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/warszawa/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/warszawa/" />
  </>
);
