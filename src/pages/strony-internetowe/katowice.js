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
import { katowice_info_txt, katowice_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

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
      <SiteInfoServices
        title_first_column={katowice_info_txt.title_first_column}
        descryption_first_column={katowice_info_txt.descryption_first_column}
        variant="one_column"
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
      <WhyMe
        title_first_row={whyMeContent.katowice[0].title}
        description_first_row={whyMeContent.katowice[0].description}
        title_second_row={whyMeContent.katowice[1].title}
        description_second_row={whyMeContent.katowice[1].description}
        title_third_row={whyMeContent.katowice[2].title}
        description_third_row={whyMeContent.katowice[2].description}
        title_fourth_row={whyMeContent.katowice[3].title}
        description_fourth_row={whyMeContent.katowice[3].description}
        title_fifth_row={whyMeContent.katowice[4].title}
        description_fifth_row={whyMeContent.katowice[4].description}
        title_sixth_row={whyMeContent.katowice[5].title}
        description_sixth_row={whyMeContent.katowice[5].description}
        title_seventh_row={whyMeContent.katowice[6].title}
        description_seventh_row={whyMeContent.katowice[6].description}
        title_eighth_row={whyMeContent.katowice[7].title}
        description_eighth_row={whyMeContent.katowice[7].description}
        title_ninth_row={whyMeContent.katowice[8].title}
        description_ninth_row={whyMeContent.katowice[8].description}
        title_tenth_row={whyMeContent.katowice[9].title}
        description_tenth_row={whyMeContent.katowice[9].description}
      />

      <LP_Action />

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
