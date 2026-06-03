import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { commonConfig } from "./config/common";
import { themeConfig } from "./config/theme";
import { pluginsConfig } from "./config/plugins";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: commonConfig.title,
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  trailingSlash: false,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        pages: {
          editUrl: commonConfig.editUrl,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: themeConfig,
  plugins: pluginsConfig,
};

export default config;
