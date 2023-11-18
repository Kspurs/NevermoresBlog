import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// gatsby-config.js
const myQuery = `
  query {
    pages: allSitePage {
      nodes {
        # querying id is required
        id
        component
        path
        componentChunkName
        internal {
          # querying internal.contentDigest is required
          contentDigest
          type
        }
      }
    }
  }
`;
const queries = [
  {
    query: myQuery,
    queryVariables: {}, // optional. Allows you to use graphql query variables in the query
    indexName: 'nevermoreblog', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
  },
];
const config: GatsbyConfig = {
  siteMetadata: {
    title: `nevermoresblog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  //   {
  //   resolve: 'gatsby-source-contentful',
  //   options: {
  //     "accessToken": "Qe8VViUNHaXpLsczYQquzTZA2PLyUtzpiocuzd7Hojw",
  //     "spaceId": "iwuocb8gknbj"
  //   }
  // }, 
  {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
        concurrentQueries: false, // default: true
        dryRun: false, // default: false, only calculate which objects would be indexed, but do not push to Algolia
        continueOnFailure: false, // default: false, don't fail the build if Algolia indexing fails
        algoliasearchOptions: undefined, // default: { timeouts: { connect: 1, read: 30, write: 30 } }, pass any different options to the algoliasearch constructor
      },
    },
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",{
    resolve:'gatsby-source-filesystem',
    options:{
      name:`blog`,
      path:`${__dirname}/content/blog`
    }
  },{resolve:'gatsby-plugin-mdx',
options:{
    gatsbyRemarkPlugins:[
      'gatsby-remark-autolink-headers', 
      'gatsby-remark-prismjs',
    ]
}},{
    resolve:'gatsby-transformer-remark',
    options:{
      plugins:[{resolve:
        'gatsby-remark-autolink-headers',
        options: {
          offsetY: `100`,
          icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          className: `custom-class`,
          maintainCase: true,
          removeAccents: true,
          isIconAfterHeader: true,
          elements: [`h1`, `h4`],
        },
}  ,
        {
          resolve:'gatsby-remark-prismjs',
          options:{
            classPrefix:'language-',

          }
        },
      ]
  }}],
};

export default config;
