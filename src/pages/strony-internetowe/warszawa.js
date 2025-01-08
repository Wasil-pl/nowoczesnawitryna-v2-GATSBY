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
import { warszawa_info_txt, warszawa_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

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
      <SiteInfoServices
        title_first_column={warszawa_info_txt.title_first_column}
        descryption_first_column={warszawa_info_txt.descryption_first_column}
        variant="one_column"
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
      <WhyMe
        title_first_row={whyMeContent.warszawa[0].title}
        description_first_row={whyMeContent.warszawa[0].description}
        title_second_row={whyMeContent.warszawa[1].title}
        description_second_row={whyMeContent.warszawa[1].description}
        title_third_row={whyMeContent.warszawa[2].title}
        description_third_row={whyMeContent.warszawa[2].description}
        title_fourth_row={whyMeContent.warszawa[3].title}
        description_fourth_row={whyMeContent.warszawa[3].description}
        title_fifth_row={whyMeContent.warszawa[4].title}
        description_fifth_row={whyMeContent.warszawa[4].description}
        title_sixth_row={whyMeContent.warszawa[5].title}
        description_sixth_row={whyMeContent.warszawa[5].description}
        title_seventh_row={whyMeContent.warszawa[6].title}
        description_seventh_row={whyMeContent.warszawa[6].description}
        title_eighth_row={whyMeContent.warszawa[7].title}
        description_eighth_row={whyMeContent.warszawa[7].description}
        title_ninth_row={whyMeContent.warszawa[8].title}
        description_ninth_row={whyMeContent.warszawa[8].description}
        title_tenth_row={whyMeContent.warszawa[9].title}
        description_tenth_row={whyMeContent.warszawa[9].description}
      />

      <LP_Action />

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
