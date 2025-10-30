/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `NowoczesnaWitryna`,
    siteUrl: `https://www.nowoczesnawitryna.pl`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-scroll-reveal',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo-kolo-final.png',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          quality: 75,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/styles/index.scss'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-K29L5GHK',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Strona główna`,
        crumbLabelUpdates: [
          { pathname: '/blog/', crumbLabel: 'Blog' },
          { pathname: '/strony-internetowe/', crumbLabel: 'Strony Internetowe' },
          { pathname: '/sklepy-internetowe/', crumbLabel: 'Sklepy Internetowe' },
          { pathname: '/oferta/', crumbLabel: 'Oferta' },
          { pathname: '/kontakt/', crumbLabel: 'Kontakt' },
          {
            pathname: '/blog/aplikacje-webowe-vs-strony-internetowe/',
            crumbLabel: 'Aplikacje Webowe vs. Strony Internetowe',
          },
          { pathname: '/blog/cms-vs-strona-pisana-od-podstaw/', crumbLabel: 'CMS vs. Strona pisana od podstaw' },
          {
            pathname: '/blog/czym-jest-responsywnosc-strony/',
            crumbLabel: 'Czym jest responsywność strony internetowej?',
          },
          {
            pathname: '/blog/jak-przebiega-proces-tworzenia-strony/',
            crumbLabel: 'Jak przebiega proces tworzenia strony?',
          },
          { pathname: '/blog/jak-wybrac-idealna-strone/', crumbLabel: 'Jak wybrać idealną stronę internetową?' },
          {
            pathname: '/blog/jak-wybrac-najlepszy-hosting-i-domene/',
            crumbLabel: 'Jak wybrać najlepszy hosting i domenę?',
          },
          {
            pathname: '/blog/jakie-funkcje-powinna-miec-nowoczesna-strona/',
            crumbLabel: 'Jakie funkcje powinna mieć nowoczesna strona internetowa?',
          },
          { pathname: '/polityka-prywatnosci/', crumbLabel: 'Polityka prywatności' },
          { pathname: '/strony-internetowe/wroclaw/', crumbLabel: 'Strony Internetowe Wrocław' },
          { pathname: '/strony-internetowe/krakow/', crumbLabel: 'Strony Internetowe Kraków' },
          { pathname: '/strony-internetowe/warszawa/', crumbLabel: 'Strony Internetowe Warszawa' },
          { pathname: '/strony-internetowe/katowice/', crumbLabel: 'Strony Internetowe Katowice' },
          { pathname: '**/aplikacje-webowe/**', crumbLabel: 'Aplikacje Webowe' },
          { pathname: '/formularz-szybkiej-wyceny/', crumbLabel: 'Formularz Szybkiej Wyceny' },
          { pathname: '/projektowanie-logo/', crumbLabel: 'Projektowanie Logo' },
          { pathname: '/strony-lms/', crumbLabel: 'Strony LMS' },
          { pathname: '/strony-niestandardowe/', crumbLabel: 'Strony HTML5/CSS3' },
          { pathname: '/strony-wordpress/', crumbLabel: 'Strony WordPress' },
        ],
        exclude: ['**/404/**', '**/404.html'],
      },
    },
  ],
};

