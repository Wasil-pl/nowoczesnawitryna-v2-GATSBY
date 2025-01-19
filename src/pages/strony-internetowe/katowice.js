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
  about_me_katowice,
  katowice_info_txt,
  katowice_myService,
  katowice_processSteps,
  katowice_websiteFunctions,
  portfolioTitle,
} from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';
import LP_SiteInfo from '../../components/LandingPages/LP_SiteInfo/LP_SiteInfo';
import LP_AboutMe from '../../components/LandingPages/LP_AboutMe/LP_AboutMe';
import LP_WebsiteFunctions from '../../components/LandingPages/LP_WebsiteFunctions/LP_WebsiteFunctions';
import LP_ProcessSteps from '../../components/LandingPages/LP_ProcessSteps/LP_ProcessSteps';

const Katowice = () => {
  const title_top = 'Profesjonalne tworzenie';
  const title_middle = 'Stron internetowych';
  const title_bottom = 'w Katowicach';
  const subtitle = 'Indywidualne projekty dopasowane do potrzeb Twojej firmy w Katowicach.';
  const siteTitle = 'Strony internetowe Katowice - Nowoczesna Witryna';
  const siteDescription =
    'Oferuję profesjonalne usługi tworzenia stron internetowych w Katowicach. Moje projekty łączą nowoczesny design, intuicyjną obsługę i optymalizację pod kątem wyszukiwarek. Skontaktuj się ze mną, aby stworzyć stronę, która wyróżni Twoją firmę na tle konkurencji.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/katowice/';

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
        title_first={katowice_info_txt.title_first}
        description_first={katowice_info_txt.description_first}
        title_second={katowice_info_txt.title_second}
        description_second={katowice_info_txt.description_second}
        title_third={katowice_info_txt.title_third}
        description_third={katowice_info_txt.description_third}
        banner_description={katowice_info_txt.banner_description}
      />
      <LP_MyServices
        sectionTitle={katowice_myService.sectionTitle}
        sectionTitleColored={katowice_myService.sectionTitleColored}
        title_HTML={katowice_myService.title_html}
        description_HTML={katowice_myService.description_html}
        title_web_apps={katowice_myService.title_web_apps}
        description_web_apps={katowice_myService.description_web_apps}
        title_wordpress={katowice_myService.title_wordpress}
        description_wordpress={katowice_myService.description_wordpress}
        title_ecommerce={katowice_myService.title_ecommerce}
        description_ecommerce={katowice_myService.description_ecommerce}
        title_lms={katowice_myService.title_lms}
        description_lms={katowice_myService.description_lms}
        title_logo={katowice_myService.title_logo}
        description_logo={katowice_myService.description_logo}
      />
      <LP_AboutMe description={about_me_katowice.description} />
      <LP_WebsiteFunctions
        sectionTitle={katowice_websiteFunctions.sectionTitle}
        sectionTitleColored={katowice_websiteFunctions.sectionTitleColored}
        sectionSubtitle={katowice_websiteFunctions.sectionSubtitle}
        itemTitle1={katowice_websiteFunctions.items[0].title}
        itemDescription1={katowice_websiteFunctions.items[0].description}
        itemTitle2={katowice_websiteFunctions.items[1].title}
        itemDescription2={katowice_websiteFunctions.items[1].description}
        itemTitle3={katowice_websiteFunctions.items[2].title}
        itemDescription3={katowice_websiteFunctions.items[2].description}
        itemTitle4={katowice_websiteFunctions.items[3].title}
        itemDescription4={katowice_websiteFunctions.items[3].description}
        itemTitle5={katowice_websiteFunctions.items[4].title}
        itemDescription5={katowice_websiteFunctions.items[4].description}
        itemTitle6={katowice_websiteFunctions.items[5].title}
        itemDescription6={katowice_websiteFunctions.items[5].description}
        itemTitle7={katowice_websiteFunctions.items[6].title}
        itemDescription7={katowice_websiteFunctions.items[6].description}
        itemTitle8={katowice_websiteFunctions.items[7].title}
        itemDescription8={katowice_websiteFunctions.items[7].description}
      />
      <LP_Action />

      <LP_ProcessSteps
        sectionTitle={katowice_processSteps.sectionTitle}
        sectionTitleColored={katowice_processSteps.sectionTitleColored}
        step1Title={katowice_processSteps.steps[0].title}
        step1Description={katowice_processSteps.steps[0].description}
        step2Title={katowice_processSteps.steps[1].title}
        step2Description={katowice_processSteps.steps[1].description}
        step3Title={katowice_processSteps.steps[2].title}
        step3Description={katowice_processSteps.steps[2].description}
        step4Title={katowice_processSteps.steps[3].title}
        step4Description={katowice_processSteps.steps[3].description}
        step5Title={katowice_processSteps.steps[4].title}
        step5Description={katowice_processSteps.steps[4].description}
        step6Title={katowice_processSteps.steps[5].title}
        step6Description={katowice_processSteps.steps[5].description}
      />

      <LP_Portfolio
        title={portfolioTitle.katowice.title}
        coloredText={portfolioTitle.katowice.coloredText}
        subtitle={portfolioTitle.katowice.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default Katowice;
