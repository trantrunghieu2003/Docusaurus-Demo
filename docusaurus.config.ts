import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { commonConfig } from "./src/config/common";
import { themeConfig } from "./src/config/theme";
import { pluginsConfig } from "./src/config/plugins";
import { PluginOptions as SearchPluginOptions } from "@easyops-cn/docusaurus-search-local";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: commonConfig.title,
  url: commonConfig.appUrl,
  baseUrl: commonConfig.baseUrl,

  favicon: commonConfig.logo,
  trailingSlash: false,
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    path: "src/i18n",
  },
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/styles/globals.scss",
        },
        pages: {},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: themeConfig,
  plugins: pluginsConfig,
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      } satisfies SearchPluginOptions,
    ],
  ],
};

export default config;
