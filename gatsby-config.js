module.exports = {
  siteMetadata: {
    siteTitle: `iotaSciences Salesforce Docs`,
    defaultTitle: `iotaSciences Salesforce Docs`,
    siteTitleShort: `iotaSciences Salesforce Docs`,
    siteDescription: `Documentation for using Salesforce at iotaSciences.`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `Ben Hadman`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#344877`,
    footer: `BH`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        dangerouslySetAllPagesToNoIndex: 'true',
        noindex: 'true',
        nofollow: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iotaSciences Salesforce Docs`,
        short_name: `Salesforce Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

