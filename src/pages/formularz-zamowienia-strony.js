import * as React from 'react';
import '../styles/global.scss';
import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/settings.scss';
import Headers from '../components/Headers/Headers';
import Footer from '../components/Footer/Footer';
import RootLayout from '../components/RootLayout/RootLayout';
import ScroolUpButton from '../components/ScroolUpButton/ScroolUpButton';
import SiteOrderForm from '../components/SiteOrderForm/SiteOrderForm';

const FormularzZamowieniaStrony = () => {
  const title = 'Formularz zamówienia strony';
  const subtitle = 'Zamów swoją wymarzoną stronę www!';
  const siteTitle = 'formularz zamówienia strony - Nowoczesna witryna';
  const siteDescription =
    'Nowoczesna witryna to miejsce gdzie stworzysz swoją wymarzoną stronę www. Wypełnij formularz zamówienia i ciesz się nowoczesną witryną!';
  const siteUrl = 'https://www.nowoczesnawitryna.pl/formularz-zamowienia-strony/';

  return (
    <>
      <RootLayout title={siteTitle} url={siteUrl} description={siteDescription} />
      <Headers title={title} subtitle={subtitle} />
      <SiteOrderForm />
      <ScroolUpButton />
      <Footer />
    </>
  );
};

export default FormularzZamowieniaStrony;
