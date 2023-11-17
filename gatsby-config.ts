import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";

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
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",{
    resolve:'gatsby-source-filesystem',
    options:{
      name:`blog`,
      path:`${__dirname}/content/blog`
    }
  },{resolve:'gatsby-plugin-mdx',
options:{
    gatsbyRemarkPlugins:[
      
      '@jpfulton/gatsby-remark-copy-button',
      'gatsby-remark-prismjs',
    ]
}},{
    resolve:'gatsby-transformer-remark',
    options:{
      plugins:[
        {
          resolve:'gatsby-remark-prismjs',
          options:{
            classPrefix:'language-',

          }
        }
      ]
  }}],
};

export default config;
