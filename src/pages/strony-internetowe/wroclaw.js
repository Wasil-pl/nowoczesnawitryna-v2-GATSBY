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
import { wroclaw_info_txt, wroclaw_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

const wroclaw = () => {
  const title_top = 'Innowacyjne i funkcjonalne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm z Wrocławia';
  const subtitle =
    'Realizuję strony internetowe, które wyróżniają się nowoczesnym designem i intuicyjną obsługą, wspierając lokalne firmy we Wrocławiu w budowaniu silnej obecności w internecie.';

  const siteTitle = 'Tworzenie stron internetowych Wrocław - Nowoczesna Witryna';
  const siteDescription =
    'Specjalizuję się w tworzeniu stron internetowych dla firm z Wrocławia. Moje realizacje łączą nowoczesną estetykę z optymalizacją SEO i wysoką funkcjonalnością, zapewniając skuteczne wsparcie Twojej działalności online. Skontaktuj się, aby stworzyć stronę, która przyciągnie klientów i podkreśli profesjonalizm Twojej firmy.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/wroclaw/';

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
        title_first_column={wroclaw_info_txt.title_first_column}
        descryption_first_column={wroclaw_info_txt.descryption_first_column}
        variant="one_column"
      />
      <LP_MyServices
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
      <WhyMe
        title_first_row={whyMeContent.wroclaw[0].title}
        description_first_row={whyMeContent.wroclaw[0].description}
        title_second_row={whyMeContent.wroclaw[1].title}
        description_second_row={whyMeContent.wroclaw[1].description}
        title_third_row={whyMeContent.wroclaw[2].title}
        description_third_row={whyMeContent.wroclaw[2].description}
        title_fourth_row={whyMeContent.wroclaw[3].title}
        description_fourth_row={whyMeContent.wroclaw[3].description}
        title_fifth_row={whyMeContent.wroclaw[4].title}
        description_fifth_row={whyMeContent.wroclaw[4].description}
        title_sixth_row={whyMeContent.wroclaw[5].title}
        description_sixth_row={whyMeContent.wroclaw[5].description}
        title_seventh_row={whyMeContent.wroclaw[6].title}
        description_seventh_row={whyMeContent.wroclaw[6].description}
        title_eighth_row={whyMeContent.wroclaw[7].title}
        description_eighth_row={whyMeContent.wroclaw[7].description}
        title_ninth_row={whyMeContent.wroclaw[8].title}
        description_ninth_row={whyMeContent.wroclaw[8].description}
        title_tenth_row={whyMeContent.wroclaw[9].title}
        description_tenth_row={whyMeContent.wroclaw[9].description}
      />

      <LP_Action />

      <LP_Portfolio
        title={portfolioTitle.wroclaw.title}
        coloredText={portfolioTitle.wroclaw.coloredText}
        subtitle={portfolioTitle.wroclaw.subtitle}
      />

      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default wroclaw;
