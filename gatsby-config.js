require('dotenv').config({ path: `./environment/gatsby.env` })

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.chlorophyllkid.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('tailwindcss')('./tailwind.config.js'),
          require('postcss-nesting'),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
  ],
}
