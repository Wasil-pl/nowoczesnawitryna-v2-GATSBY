import React from 'react';
import { Helmet } from 'react-helmet';

const RootLayout = ({ title, url, urlOtherLang, description }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'pl',
        }}
      >
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="pl" href={url} />
        <link rel="alternate" hrefLang="en" href={urlOtherLang} />
        <meta property="og:locale" content="pl" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Nowoczesna witryna" />
        <link rel="shortlink" href={url} />
      </Helmet>
    </>
  );
};

export default RootLayout;
