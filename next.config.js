if (!process.env.WP_GRAPHQL_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",

          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      collapseGroups: false,
                      cleanupIds: false,
                      convertTransform: false,
                      convertPathData: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: [
      process.env.WP_GRAPHQL_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "secure.gravatar.com",
      "bracketmedia.com",
      "realmone-headless.local"
    ],
  },
};
