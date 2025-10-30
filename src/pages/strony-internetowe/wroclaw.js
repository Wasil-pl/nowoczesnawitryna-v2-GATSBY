import * as React from 'react';
import {
  wroclaw_info_txt,
  wroclaw_myService,
  portfolioTitle,
  about_me_wroclaw,
  wroclaw_websiteFunctions,
  wroclaw_processSteps,
} from '../../consts/landingPage';
import Headers from '../../components/Header/Headers/Headers';
import LPSiteInfo from '../../components/Sections/LandingPages/LPSiteInfo/LPSiteInfo';
import LPMyServices from '../../components/Sections/LandingPages/LPMyServices/LPMyServices';
import LPAboutMe from '../../components/Sections/LandingPages/LPAboutMe/LPAboutMe';
import LPWebsiteFunctions from '../../components/Sections/LandingPages/LPWebsiteFunctions/LPWebsiteFunctions';
import LPProcessSteps from '../../components/Sections/LandingPages/LPProcessSteps/LPProcessSteps';
import LPPortfolio from '../../components/Sections/LandingPages/LPPortfolio/LPPortfolio';
import LPAction from '../../components/Sections/LandingPages/LPAction/LPAction';

const wroclaw = ({ pageContext }) => {
  const title_top = 'Innowacyjne ';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Wrocławia';
  const subtitle =
    'Realizuję strony internetowe, które wyróżniają się nowoczesnym designem i intuicyjną obsługą, wspierając lokalne firmy we Wrocławiu w budowaniu silnej obecności w internecie.';

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <>
      <Headers
        title_top={title_top}
        title_middle={title_middle}
        title_bottom={title_bottom}
        subtitle={subtitle}
        variant={'landing_page'}
        crumbs={crumbs}
        crumbLabel="Strony Internetowe Wrocław"
      />
      <LPSiteInfo
        title_first={wroclaw_info_txt.title_first}
        description_first={wroclaw_info_txt.description_first}
        title_second={wroclaw_info_txt.title_second}
        description_second={wroclaw_info_txt.description_second}
        title_third={wroclaw_info_txt.title_third}
        description_third={wroclaw_info_txt.description_third}
        banner_description={wroclaw_info_txt.banner_description}
      />
      <LPMyServices
        sectionTitle={wroclaw_myService.sectionTitle}
        sectionTitleColored={wroclaw_myService.sectionTitleColored}
        title_HTML={wroclaw_myService.title_html}
        description_HTML={wroclaw_myService.description_html}
        title_web_apps={wroclaw_myService.title_web_apps}
        description_web_apps={wroclaw_myService.description_web_apps}
        title_wordpress={wroclaw_myService.title_wordpress}
        description_wordpress={wroclaw_myService.description_wordpress}
        title_ecommerce={wroclaw_myService.title_ecommerce}
        description_ecommerce={wroclaw_myService.description_ecommerce}
        title_lms={wroclaw_myService.title_lms}
        description_lms={wroclaw_myService.description_lms}
        title_logo={wroclaw_myService.title_logo}
        description_logo={wroclaw_myService.description_logo}
      />
      <LPAboutMe description={about_me_wroclaw.description} />

      <LPWebsiteFunctions
        sectionTitle={wroclaw_websiteFunctions.sectionTitle}
        sectionTitleColored={wroclaw_websiteFunctions.sectionTitleColored}
        sectionSubtitle={wroclaw_websiteFunctions.sectionSubtitle}
        itemTitle1={wroclaw_websiteFunctions.items[0].title}
        itemDescription1={wroclaw_websiteFunctions.items[0].description}
        itemTitle2={wroclaw_websiteFunctions.items[1].title}
        itemDescription2={wroclaw_websiteFunctions.items[1].description}
        itemTitle3={wroclaw_websiteFunctions.items[2].title}
        itemDescription3={wroclaw_websiteFunctions.items[2].description}
        itemTitle4={wroclaw_websiteFunctions.items[3].title}
        itemDescription4={wroclaw_websiteFunctions.items[3].description}
        itemTitle5={wroclaw_websiteFunctions.items[4].title}
        itemDescription5={wroclaw_websiteFunctions.items[4].description}
        itemTitle6={wroclaw_websiteFunctions.items[5].title}
        itemDescription6={wroclaw_websiteFunctions.items[5].description}
        itemTitle7={wroclaw_websiteFunctions.items[6].title}
        itemDescription7={wroclaw_websiteFunctions.items[6].description}
        itemTitle8={wroclaw_websiteFunctions.items[7].title}
        itemDescription8={wroclaw_websiteFunctions.items[7].description}
      />
      <LPAction />

      <LPProcessSteps
        sectionTitle={wroclaw_processSteps.sectionTitle}
        sectionTitleColored={wroclaw_processSteps.sectionTitleColored}
        step1Title={wroclaw_processSteps.steps[0].title}
        step1Description={wroclaw_processSteps.steps[0].description}
        step2Title={wroclaw_processSteps.steps[1].title}
        step2Description={wroclaw_processSteps.steps[1].description}
        step3Title={wroclaw_processSteps.steps[2].title}
        step3Description={wroclaw_processSteps.steps[2].description}
        step4Title={wroclaw_processSteps.steps[3].title}
        step4Description={wroclaw_processSteps.steps[3].description}
        step5Title={wroclaw_processSteps.steps[4].title}
        step5Description={wroclaw_processSteps.steps[4].description}
        step6Title={wroclaw_processSteps.steps[5].title}
        step6Description={wroclaw_processSteps.steps[5].description}
      />

      <LPPortfolio
        title={portfolioTitle.wroclaw.title}
        coloredText={portfolioTitle.wroclaw.coloredText}
        subtitle={portfolioTitle.wroclaw.subtitle}
      />
    </>
  );
};

export default wroclaw;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Tworzenie stron internetowych Wrocław - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Specjalizuję się w tworzeniu stron internetowych dla firm z Wrocławia. Moje realizacje łączą nowoczesną estetykę z optymalizacją SEO i wysoką funkcjonalnością, zapewniając skuteczne wsparcie Twojej działalności online. Skontaktuj się, aby stworzyć stronę, która przyciągnie klientów i podkreśli profesjonalizm Twojej firmy."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/wroclaw/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-internetowe/wroclaw/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tworzenie stron internetowych Wrocław - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Specjalizuję się w tworzeniu stron internetowych dla firm z Wrocławia. Moje realizacje łączą nowoczesną estetykę z optymalizacją SEO i wysoką funkcjonalnością, zapewniając skuteczne wsparcie Twojej działalności online. Skontaktuj się, aby stworzyć stronę, która przyciągnie klientów i podkreśli profesjonalizm Twojej firmy."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/wroclaw/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/wroclaw/" />
  </>
);
