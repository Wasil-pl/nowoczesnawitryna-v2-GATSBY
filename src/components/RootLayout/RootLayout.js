import React from 'react';
import { Helmet } from 'react-helmet';

const RootLayout = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'pl',
        }}
      >
        <meta name="robots" content="index, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>strona główna - Nowoczesna witryna</title>
        <meta
          name="description"
          content="Dariusz Wasilewski. Tworzę nowoczesne, responsywne strony i sklepy internetowe, oraz aplikacje webowe. Odkryj moje projekty i umiejętności!"
        />
        <link rel="canonical" href="https://www.nowoczesnawitryna.pl/" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="strona główna - Nowoczesna witryna" />
        <meta
          property="og:description"
          content="Dariusz Wasilewski. Tworzę nowoczesne, responsywne strony i sklepy internetowe, oraz aplikacje webowe. Odkryj moje projekty i umiejętności!"
        />
        <meta property="og:url" content="https://www.nowoczesnawitryna.pl/" />
        <meta property="og:site_name" content="Nowoczesna witryna" />
        <link rel="shortlink" href="https://www.nowoczesnawitryna.pl/" />
      </Helmet>
    </>
  );
};

export default RootLayout;
