import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import SiteInfoServices from '../components/SiteInfoServices/SiteInfoServices';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import { wycena_txt } from '../consts/texts';
import { OrderSiteForm } from '../components/MultiStepForm/index';

const FormularzWyceny = () => {
  const title_top = 'Szybka Wycena';
  const title_middle = 'Online';
  const subtitle = 'Kilka pytań i już jestem gotowy na przygotowanie szybkiej wyceny Twojego projektu!';
  const siteTitle = 'Formularz Szybkiej Wyceny – Nowoczesna Witryna';
  const siteDescription =
    'Zamów szybką wycenę swojego projektu online. Wypełnij formularz, a ja przygotuję dla Ciebie ofertę dostosowaną do Twoich potrzeb.';

  const siteUrl = 'https://www.nowoczesnawitryna.pl/formularz-szybkiej-wyceny/';
  const siteUrlOtherLang = 'https://www.nowoczesnawitryna.com/form-for-quick-valuation/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} urlOtherLang={siteUrlOtherLang} description={siteDescription} />
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} active="formularz-wyceny" />
      <ScroolUpButton />
      <SiteInfoServices
        title_first_column={wycena_txt.title_first_column}
        descryption_first_column={wycena_txt.descryption_first_column}
        variant="one_column"
        isHtml
      />
      <OrderSiteForm />
      <Footer />
    </>
  );
};

export default FormularzWyceny;
