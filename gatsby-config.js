module.exports = {
  siteMetadata: {
    title: `Susie Jee`,
    name: `Susie Jee`,
    siteUrl: `https://www.susiejee.com`,
    description: `A developer blog featuring web development, data science, games, dachshunds, and attempts at baking like the Great British Baking Show`,
    hero: {
      heading: `Welcome to SusieJee.com`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/TheSushiQ`,
      },
      {
        name: `github`,
        url: `https://github.com/skuretski`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/sujak12`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/skuretski`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Susie Jee`,
        short_name: `Susie Jee`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
