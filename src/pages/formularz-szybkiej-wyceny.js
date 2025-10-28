import * as React from 'react';
import Headers from '../components/Header/Headers/Headers';
import { wycena_txt } from '../consts/texts';
import { MultiStepForm } from '../components/Sections/Form/MultiStepForm/MultiStepForm';
import ServiceHighlights from '../components/Sections/Shared/ServiceHighlights/ServiceHighlights';

const FormularzWyceny = () => {
  const title_top = 'Szybka Wycena';
  const title_middle = 'Online';
  const subtitle = 'Kilka pytań i już jestem gotowy na przygotowanie szybkiej wyceny Twojego projektu!';

  return (
    <>
      <Headers title_top={title_top} title_middle={title_middle} subtitle={subtitle} />
      <ServiceHighlights
        title_first_column={wycena_txt.title_first_column}
        descryption_first_column={wycena_txt.descryption_first_column}
        variant="one_column"
        isHtml
      />
      <MultiStepForm />
    </>
  );
};

export default FormularzWyceny;

export const Head = () => (
  <>
    <html lang="pl" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <title>Formularz Szybkiej Wyceny – Nowoczesna Witryna</title>
    <meta
      name="description"
      content="Zamów szybką wycenę swojego projektu online. Wypełnij formularz, a ja przygotuję dla Ciebie ofertę dostosowaną do Twoich potrzeb."
    />
    <link rel="canonical" href="https://www.nowoczesnawitryna.pl/formularz-szybkiej-wyceny/#form" />
    <link rel="alternate" hrefLang="pl" href="https://www.nowoczesnawitryna.pl/formularz-szybkiej-wyceny/#form" />

    <meta property="og:locale" content="pl" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Formularz Szybkiej Wyceny – Nowoczesna Witryna" />
    <meta
      property="og:description"
      content="Zamów szybką wycenę swojego projektu online. Wypełnij formularz, a ja przygotuję dla Ciebie ofertę dostosowaną do Twoich potrzeb."
    />
    <meta property="og:url" content="https://www.nowoczesnawitryna.pl/formularz-szybkiej-wyceny/#form" />
    <meta property="og:site_name" content="Nowoczesna witryna" />
    <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/formularz-szybkiej-wyceny/#form" />
  </>
);
