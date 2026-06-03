import type { Config } from "@docusaurus/types";
import { commonConfig } from "./common";

export const pluginsConfig: Config["plugins"] = [
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "docs",
      path: "src/content/docs",
      routeBasePath: "docs",
      sidebarPath: "src/sidebars/sidebarsDocs.ts",
      editUrl: commonConfig.editUrl,
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
