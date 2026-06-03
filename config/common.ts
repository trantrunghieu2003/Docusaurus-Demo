import dotenv from "dotenv";
dotenv.config();

export const commonConfig = {
  title: process.env.NAME || "Help Center Demo",
  editUrl: process.env.EDIT_URL,
  algoliaAppId: process.env.ALGOLIA_APP_ID!,
  algoliaApiKey: process.env.ALGOLIA_API_KEY!,
  algoliaIndexName: process.env.ALGOLIA_INDEX_NAME!,
};
