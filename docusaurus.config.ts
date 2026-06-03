import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import dotenv from "dotenv";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
dotenv.config();

const NAME = "Help Center Demo";
const EDIT_URL = process.env.EDIT_URL;

const config: Config = {
  title: NAME,
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

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
          editUrl: EDIT_URL,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: NAME,
      logo: {
        alt: `${NAME} Logo`,
        src: "img/logo.svg",
        width: 28,
        height: 28,
        href: "/docs",
      },
      items: [
        {
          type: "docSidebar",
          docsPluginId: "docs",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          docsPluginId: "faq",
          sidebarId: "faqSidebar",
          position: "left",
          label: "FAQ",
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
      ],
      hideOnScroll: true,
    },
    footer: {
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID!,
      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY!,
      indexName: process.env.ALGOLIA_INDEX_NAME!,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs",
        path: "src/content/docs",
        routeBasePath: "docs",
        sidebarPath: "./sidebarsDocs.ts",
        editUrl: EDIT_URL,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      { id: "faq", path: "src/content/faq", routeBasePath: "faq", sidebarPath: "./sidebarsFaq.ts", editUrl: EDIT_URL },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "troubleshooting",
        path: "src/content/troubleshooting",
        routeBasePath: "troubleshooting",
        sidebarPath: "./sidebarsTroubleshooting.ts",
        editUrl: EDIT_URL,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "comparisons",
        path: "src/content/comparisons",
        routeBasePath: "comparisons",
        sidebarPath: "./sidebarsComparisons.ts",
        editUrl: EDIT_URL,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "changelog",
        path: "src/content/changelog",
        routeBasePath: "changelog",
        sidebarPath: "./sidebarsChangelog.ts",
        editUrl: EDIT_URL,
      },
    ],
  ],
};

export default config;
