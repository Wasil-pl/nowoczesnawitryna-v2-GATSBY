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
import { gdansk_info_txt, gdansk_myService, portfolioTitle, whyMeContent } from '../../consts/landingPage';
import LP_MyServices from '../../components/LandingPages/LP_MyServices/LP_MyServices';
import WhyMe from '../../components/LandingPages/WhyMe/WhyMe';
import LP_Portfolio from '../../components/LandingPages/LP_Portfolio/LP_Portfolio';
import LP_Action from '../../components/LandingPages/LP_Action/LP_Action';

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
      <SiteInfoServices
        title_first_column={gdansk_info_txt.title_first_column}
        descryption_first_column={gdansk_info_txt.descryption_first_column}
        variant="one_column"
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
      <WhyMe
        title_first_row={whyMeContent.gdansk[0].title}
        description_first_row={whyMeContent.gdansk[0].description}
        title_second_row={whyMeContent.gdansk[1].title}
        description_second_row={whyMeContent.gdansk[1].description}
        title_third_row={whyMeContent.gdansk[2].title}
        description_third_row={whyMeContent.gdansk[2].description}
        title_fourth_row={whyMeContent.gdansk[3].title}
        description_fourth_row={whyMeContent.gdansk[3].description}
        title_fifth_row={whyMeContent.gdansk[4].title}
        description_fifth_row={whyMeContent.gdansk[4].description}
        title_sixth_row={whyMeContent.gdansk[5].title}
        description_sixth_row={whyMeContent.gdansk[5].description}
        title_seventh_row={whyMeContent.gdansk[6].title}
        description_seventh_row={whyMeContent.gdansk[6].description}
        title_eighth_row={whyMeContent.gdansk[7].title}
        description_eighth_row={whyMeContent.gdansk[7].description}
        title_ninth_row={whyMeContent.gdansk[8].title}
        description_ninth_row={whyMeContent.gdansk[8].description}
        title_tenth_row={whyMeContent.gdansk[9].title}
        description_tenth_row={whyMeContent.gdansk[9].description}
      />

      <LP_Action />

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
