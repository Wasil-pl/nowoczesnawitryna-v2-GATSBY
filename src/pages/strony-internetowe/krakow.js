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
import { krakow_info_txt, krakow_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

const krakow = () => {
  const title_top = 'Nowoczesne i funkcjonalne';
  const title_middle = 'Strony internetowe';
  const title_bottom = 'dla firm w Krakowie';
  const subtitle =
    'Tworzę strony, które łączą unikalny design z doskonałą funkcjonalnością, pomagając firmom z Krakowa skutecznie zaistnieć w internecie.';

  const siteTitle = 'Strony internetowe Kraków - Nowoczesna Witryna';
  const siteDescription =
    'Oferuję profesjonalne usługi tworzenia stron internetowych w Krakowie. Moje projekty łączą nowoczesny design, intuicyjną obsługę i optymalizację pod kątem wyszukiwarek. Skontaktuj się ze mną, aby stworzyć stronę, która wyróżni Twoją firmę na tle konkurencji.';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/strony-internetowe/krakow/';

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
        title_first_column={krakow_info_txt.title_first_column}
        descryption_first_column={krakow_info_txt.descryption_first_column}
        variant="one_column"
      />
      <LP_MyServices
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
      <WhyMe
        title_first_row={whyMeContent.krakow[0].title}
        description_first_row={whyMeContent.krakow[0].description}
        title_second_row={whyMeContent.krakow[1].title}
        description_second_row={whyMeContent.krakow[1].description}
        title_third_row={whyMeContent.krakow[2].title}
        description_third_row={whyMeContent.krakow[2].description}
        title_fourth_row={whyMeContent.krakow[3].title}
        description_fourth_row={whyMeContent.krakow[3].description}
        title_fifth_row={whyMeContent.krakow[4].title}
        description_fifth_row={whyMeContent.krakow[4].description}
        title_sixth_row={whyMeContent.krakow[5].title}
        description_sixth_row={whyMeContent.krakow[5].description}
        title_seventh_row={whyMeContent.krakow[6].title}
        description_seventh_row={whyMeContent.krakow[6].description}
        title_eighth_row={whyMeContent.krakow[7].title}
        description_eighth_row={whyMeContent.krakow[7].description}
        title_ninth_row={whyMeContent.krakow[8].title}
        description_ninth_row={whyMeContent.krakow[8].description}
        title_tenth_row={whyMeContent.krakow[9].title}
        description_tenth_row={whyMeContent.krakow[9].description}
      />

      <LP_Action />

      <LP_Portfolio
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
