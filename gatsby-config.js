/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `NowoczesnaWitryna`,
    siteUrl: `https://www.nowoczesnawitryna.pl`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'react-bootstrap',
    'react-bootstrap-icons',
    `gatsby-plugin-scroll-reveal`,
    `react-hook-form`,
    `gatsby-plugin-minify`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.jpg',
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
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
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
  ],
};

