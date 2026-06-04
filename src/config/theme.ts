import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import { commonConfig } from "./common";

const navbar: Preset.ThemeConfig["navbar"] = {
  title: commonConfig.title,
  logo: {
    alt: `${commonConfig.title} Logo`,
    src: commonConfig.logo,
    width: 32,
    height: 32,
    href: "/docs",
  },
  items: [
    {
      type: "docSidebar",
      sidebarId: "docsSidebar",
      position: "left",
      label: "Docs",
    },
    {
      type: "docSidebar",
      docsPluginId: "faq",
      sidebarId: "faqSidebar",
      position: "left",
      label: "FAQs",
    },
    {
      type: "docSidebar",
      docsPluginId: "troubleshooting",
      sidebarId: "troubleshootingSidebar",
      position: "left",
      label: "Troubleshooting",
    },
    {
      type: "docSidebar",
      docsPluginId: "comparisons",
      sidebarId: "comparisonsSidebar",
      position: "left",
      label: "Comparisons",
    },
    {
      type: "docSidebar",
      docsPluginId: "changelog",
      sidebarId: "changelogSidebar",
      position: "left",
      label: "Changelog",
    },
    {
      type: "docsVersionDropdown",
      position: "right",
      docsPluginId: "default",
    },
    {
      type: "localeDropdown",
      position: "right",
    },
  ],
  hideOnScroll: true,
};

const footer: Preset.ThemeConfig["footer"] = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Introduction",
          to: "/docs",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "Stack Overflow",
          href: "https://stackoverflow.com/questions/tagged/docusaurus",
        },
        {
          label: "Discord",
          href: "https://discordapp.com/invite/docusaurus",
        },
        {
          label: "X",
          href: "https://x.com/docusaurus",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "Changelog",
          to: "/changelog",
        },
        {
          label: "GitHub",
          href: "https://github.com/facebook/docusaurus",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} ${commonConfig.title}, Inc. Built with Docusaurus.`,
};

export const themeConfig = {
  colorMode: {
    respectPrefersColorScheme: false,
  },
  navbar: navbar,
  footer: footer,

  // CodeBlock theme configuration
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
  // algolia: {
  //   appId: commonConfig.algoliaAppId,
  //   apiKey: commonConfig.algoliaApiKey,
  //   indexName: commonConfig.algoliaIndexName,
  // },
} satisfies Preset.ThemeConfig;
