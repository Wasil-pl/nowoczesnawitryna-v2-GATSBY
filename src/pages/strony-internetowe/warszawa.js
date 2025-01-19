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
  warszawa_info_txt,
  warszawa_myService,
  portfolioTitle,
  about_me_warszawa,
  warszawa_websiteFunctions,
  warszawa_processSteps,
} from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';
import LP_SiteInfo from '../../components/LandingPages/LP_SiteInfo/LP_SiteInfo';
import LP_AboutMe from '../../components/LandingPages/LP_AboutMe/LP_AboutMe';
import LP_WebsiteFunctions from '../../components/LandingPages/LP_WebsiteFunctions/LP_WebsiteFunctions';
import LP_ProcessSteps from '../../components/LandingPages/LP_ProcessSteps/LP_ProcessSteps';

const warszawa = () => {
  const title_top = 'Profesjonalne i nowoczesne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm w Warszawie';
  const subtitle =
    'Tworzę strony internetowe, które łączą innowacyjny design z zaawansowaną funkcjonalnością, pomagając firmom z Warszawy skutecznie budować swoją obecność w internecie.';

  const siteTitle = 'Strony internetowe Warszawa - Nowoczesna Witryna';
  const siteDescription =
    'Oferuję kompleksowe usługi tworzenia stron internetowych w Warszawie. Moje projekty wyróżniają się nowoczesnym wyglądem, łatwością obsługi i optymalizacją SEO, wspierając rozwój Twojej firmy online. Skontaktuj się ze mną, aby stworzyć stronę, która przyciągnie uwagę i zwiększy widoczność w internecie.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/warszawa/';

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
        title_first={warszawa_info_txt.title_first}
        description_first={warszawa_info_txt.description_first}
        title_second={warszawa_info_txt.title_second}
        description_second={warszawa_info_txt.description_second}
        title_third={warszawa_info_txt.title_third}
        description_third={warszawa_info_txt.description_third}
        banner_description={warszawa_info_txt.banner_description}
      />
      <LP_MyServices
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
      <LP_AboutMe description={about_me_warszawa.description} />
      <LP_WebsiteFunctions
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

      <LP_Action />

      <LP_ProcessSteps
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

      <LP_Portfolio
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
