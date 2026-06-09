import type { Config } from "@docusaurus/types";

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
];
