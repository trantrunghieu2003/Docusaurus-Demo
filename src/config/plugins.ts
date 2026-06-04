import type { Config } from "@docusaurus/types";
import { commonConfig } from "./common";

export const pluginsConfig: Config["plugins"] = [
  "docusaurus-plugin-sass",
  // Notice: We present this as a theme instead of plugin now, see https://github.com/facebook/docusaurus/issues/6488#issuecomment-1024124096.
  // [
  //   "@easyops-cn/docusaurus-search-local",
  //   {
  //     // `hashed` is recommended as long-term-cache of index file is possible.
  //     hashed: true,
  //   } satisfies PluginOptions,
  // ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "default",
      path: "src/content/docs",
      routeBasePath: "docs",
      sidebarPath: "src/sidebars/sidebarsDocs.ts",
      editUrl: commonConfig.editUrl,

      lastVersion: "current",
      versions: {
        current: {
          label: "Latest",
        },
      },
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "faq",
      path: "src/content/faq",
      routeBasePath: "faq",
      sidebarPath: "src/sidebars/sidebarsFaq.ts",
      editUrl: commonConfig.editUrl,
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "troubleshooting",
      path: "src/content/troubleshooting",
      routeBasePath: "troubleshooting",
      sidebarPath: "src/sidebars/sidebarsTroubleshooting.ts",
      editUrl: commonConfig.editUrl,
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "comparisons",
      path: "src/content/comparisons",
      routeBasePath: "comparisons",
      sidebarPath: "src/sidebars/sidebarsComparisons.ts",
      editUrl: commonConfig.editUrl,
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "changelog",
      path: "src/content/changelog",
      routeBasePath: "changelog",
      sidebarPath: "src/sidebars/sidebarsChangelog.ts",
      editUrl: commonConfig.editUrl,
    },
  ],
];
