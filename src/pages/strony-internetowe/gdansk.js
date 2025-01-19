import * as React from 'react';
import '../../styles/global.scss';
import '../../styles/normalize.scss';
import '../../styles/typography.scss';
import '../../styles/settings.scss';
import RootLayout from '../../components/RootLayout/RootLayout';
import Headers from '../../components/Headers/Headers';
import Footer from '../../components/Footer/Footer';
import ScroolUpButton from '../../components/ScroolUpButton/ScroolUpButton';
import {
  about_me_gdansk,
  gdansk_info_txt,
  gdansk_myService,
  gdansk_processSteps,
  gdansk_websiteFunctions,
  portfolioTitle,
} from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';
import LP_SiteInfo from '../../components/LandingPages/LP_SiteInfo/LP_SiteInfo';
import LP_AboutMe from '../../components/LandingPages/LP_AboutMe/LP_AboutMe';
import LP_WebsiteFunctions from '../../components/LandingPages/LP_WebsiteFunctions/LP_WebsiteFunctions';
import LP_ProcessSteps from '../../components/LandingPages/LP_ProcessSteps/LP_ProcessSteps';

const gdansk = () => {
  const title_top = 'Kreatywne i funkcjonalne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Gdańska';
  const subtitle =
    'Tworzę strony internetowe, które pomagają firmom z Gdańska budować rozpoznawalność i przyciągać klientów w dynamicznie zmieniającym się środowisku online.';

  const siteTitle = 'Tworzenie stron internetowych Gdańsk - Nowoczesna Witryna';
  const siteDescription =
    'Realizuję nowoczesne strony internetowe dla firm z Gdańska, łącząc estetykę z funkcjonalnością. Moje projekty wspierają rozwój lokalnych biznesów, zwiększając widoczność w sieci dzięki optymalizacji SEO. Skontaktuj się, aby stworzyć stronę, która wyróżni Twoją firmę i przyciągnie nowych klientów.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/gdansk/';

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
      <LP_SiteInfo
        title_first={gdansk_info_txt.title_first}
        description_first={gdansk_info_txt.description_first}
        title_second={gdansk_info_txt.title_second}
        description_second={gdansk_info_txt.description_second}
        title_third={gdansk_info_txt.title_third}
        description_third={gdansk_info_txt.description_third}
        banner_description={gdansk_info_txt.banner_description}
      />
      <LP_MyServices
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
      <LP_AboutMe description={about_me_gdansk.description} />
      <LP_WebsiteFunctions
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

      <LP_Action />

      <LP_ProcessSteps
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

      <LP_Portfolio
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
