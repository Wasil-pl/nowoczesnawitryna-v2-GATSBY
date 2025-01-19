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
  poznan_info_txt,
  poznan_myService,
  portfolioTitle,
  about_me_poznan,
  poznan_websiteFunctions,
  poznan_processSteps,
} from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';
import LP_SiteInfo from '../../components/LandingPages/LP_SiteInfo/LP_SiteInfo';
import LP_AboutMe from '../../components/LandingPages/LP_AboutMe/LP_AboutMe';
import LP_WebsiteFunctions from '../../components/LandingPages/LP_WebsiteFunctions/LP_WebsiteFunctions';
import LP_ProcessSteps from '../../components/LandingPages/LP_ProcessSteps/LP_ProcessSteps';

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
      <LP_SiteInfo
        title_first={poznan_info_txt.title_first}
        description_first={poznan_info_txt.description_first}
        title_second={poznan_info_txt.title_second}
        description_second={poznan_info_txt.description_second}
        title_third={poznan_info_txt.title_third}
        description_third={poznan_info_txt.description_third}
        banner_description={poznan_info_txt.banner_description}
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
      <LP_AboutMe description={about_me_poznan.description} />
      <LP_WebsiteFunctions
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
      <LP_Action />

      <LP_ProcessSteps
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
