import dotenv from "dotenv";
dotenv.config();

export const commonConfig = {
  title: "Help Center",
  editUrl: process.env.EDIT_URL,
  baseUrl: process.env.BASE_URL || "/",
  appUrl: process.env.APP_URL!,

  logo: 'img/logo.png',
  // algoliaAppId: process.env.ALGOLIA_APP_ID!,
  // algoliaApiKey: process.env.ALGOLIA_API_KEY!,
  // algoliaIndexName: process.env.ALGOLIA_INDEX_NAME!,
};
