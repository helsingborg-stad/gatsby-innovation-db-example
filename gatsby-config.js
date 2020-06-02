require('dotenv').config();



module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_URL,
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          // "**/categories",
          // "**/posts",
          // "**/pages",
          // "**/tags",
          // "**/taxonomies",
          // "**/users",
          "**/media",
          "**/project",
          "**/organisation",
          "**/status",
          "**/sector",
          "**/technology",
          "**/global_goal",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ["**/posts/1456"],
        keepMediaSizes: false,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
