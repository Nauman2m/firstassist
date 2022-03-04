require('dotenv').config();
const path = require(`path`)

const siteUrl = process.env.GATSBY_SITE_URL;
const siteGraphql = process.env.GATSBY_SITE_ADMIN_URL2 + "/graphql";
const googleAnalytics = process.env.GATSBY_GOOGLE_ANALYTICS;

module.exports = {
  siteMetadata: {
    siteName: 'firstassist',
    title: `firstassist`,
    description: `firstassist`,
    author: `@Alex`,
    siteUrl: siteUrl,
    gSiteVerification: ''
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/`,
    //     entryLimit: 5000
    //   }
    // },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Montserrat",
              axes: "wght@400;500;600;700",
            },
            {
              family: "Roboto",
              axes: "wght@400;500;600;700",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: siteGraphql,
        html: {
          useGatsbyImage: true,
          createStaticFiles: true,
          imageMaxWidth: 1500,
        },
        develop: {
          hardCacheMediaFiles: false,
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "xxxx",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};
