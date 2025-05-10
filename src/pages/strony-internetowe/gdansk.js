import * as React from 'react';
import {
  about_me_gdansk,
  gdansk_info_txt,
  gdansk_myService,
  gdansk_processSteps,
  gdansk_websiteFunctions,
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

const gdansk = () => {
  const title_top = 'Kreatywne ';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Gdańska';
  const subtitle =
    'Tworzę strony internetowe, które pomagają firmom z Gdańska budować rozpoznawalność i przyciągać klientów w dynamicznie zmieniającym się środowisku online.';

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
        title_first={gdansk_info_txt.title_first}
        description_first={gdansk_info_txt.description_first}
        title_second={gdansk_info_txt.title_second}
        description_second={gdansk_info_txt.description_second}
        title_third={gdansk_info_txt.title_third}
        description_third={gdansk_info_txt.description_third}
        banner_description={gdansk_info_txt.banner_description}
      />
      <LPMyServices
        sectionTitle={gdansk_myService.sectionTitle}
        sectionTitleColored={gdansk_myService.sectionTitleColored}
        title_HTML={gdansk_myService.title_html}
        description_HTML={gdansk_myService.description_html}
        title_web_apps={gdansk_myService.title_web_apps}
        description_web_apps={gdansk_myService.description_web_apps}
        title_wordpress={gdansk_myService.title_wordpress}
        description_wordpress={gdansk_myService.description_wordpress}
        title_ecommerce={gdansk_myService.title_ecommerce}
        description_ecommerce={gdansk_myService.description_ecommerce}
        title_lms={gdansk_myService.title_lms}
        description_lms={gdansk_myService.description_lms}
        title_logo={gdansk_myService.title_logo}
        description_logo={gdansk_myService.description_logo}
      />
      <LPAboutMe description={about_me_gdansk.description} />
      <LPWebsiteFunctions
        sectionTitle={gdansk_websiteFunctions.sectionTitle}
        sectionTitleColored={gdansk_websiteFunctions.sectionTitleColored}
        sectionSubtitle={gdansk_websiteFunctions.sectionSubtitle}
        itemTitle1={gdansk_websiteFunctions.items[0].title}
        itemDescription1={gdansk_websiteFunctions.items[0].description}
        itemTitle2={gdansk_websiteFunctions.items[1].title}
        itemDescription2={gdansk_websiteFunctions.items[1].description}
        itemTitle3={gdansk_websiteFunctions.items[2].title}
        itemDescription3={gdansk_websiteFunctions.items[2].description}
        itemTitle4={gdansk_websiteFunctions.items[3].title}
        itemDescription4={gdansk_websiteFunctions.items[3].description}
        itemDescription5={gdansk_websiteFunctions.items[4].description}
        itemTitle5={gdansk_websiteFunctions.items[4].title}
        itemTitle6={gdansk_websiteFunctions.items[5].title}
        itemDescription6={gdansk_websiteFunctions.items[5].description}
        itemTitle7={gdansk_websiteFunctions.items[6].title}
        itemDescription7={gdansk_websiteFunctions.items[6].description}
        itemTitle8={gdansk_websiteFunctions.items[7].title}
        itemDescription8={gdansk_websiteFunctions.items[7].description}
      />

      <LPAction />

      <LPProcessSteps
        sectionTitle={gdansk_processSteps.sectionTitle}
        sectionTitleColored={gdansk_processSteps.sectionTitleColored}
        step1Title={gdansk_processSteps.steps[0].title}
        step1Description={gdansk_processSteps.steps[0].description}
        step2Title={gdansk_processSteps.steps[1].title}
        step2Description={gdansk_processSteps.steps[1].description}
        step3Title={gdansk_processSteps.steps[2].title}
        step3Description={gdansk_processSteps.steps[2].description}
        step4Title={gdansk_processSteps.steps[3].title}
        step4Description={gdansk_processSteps.steps[3].description}
        step5Title={gdansk_processSteps.steps[4].title}
        step5Description={gdansk_processSteps.steps[4].description}
        step6Title={gdansk_processSteps.steps[5].title}
        step6Description={gdansk_processSteps.steps[5].description}
      />

      <LPPortfolio
        title={portfolioTitle.gdansk.title}
        coloredText={portfolioTitle.gdansk.coloredText}
        subtitle={portfolioTitle.gdansk.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default gdansk;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Tworzenie stron internetowych Gdańsk - Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Realizuję nowoczesne strony internetowe dla firm z Gdańska, łącząc estetykę z funkcjonalnością. Moje projekty wspierają rozwój lokalnych biznesów, zwiększając widoczność w sieci dzięki optymalizacji SEO. Skontaktuj się, aby stworzyć stronę, która wyróżni Twoją firmę i przyciągnie nowych klientów."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/strony-internetowe/gdansk/" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/strony-internetowe/gdansk/" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tworzenie stron internetowych Gdańsk - Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Realizuję nowoczesne strony internetowe dla firm z Gdańska, łącząc estetykę z funkcjonalnością. Moje projekty wspierają rozwój lokalnych biznesów, zwiększając widoczność w sieci dzięki optymalizacji SEO. Skontaktuj się, aby stworzyć stronę, która wyróżni Twoją firmę i przyciągnie nowych klientów."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/strony-internetowe/gdansk/" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/strony-internetowe/gdansk/" />
  </>
);
