import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { createFileSystemTypesCache } from "@shikijs/vitepress-twoslash/cache-fs";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { defineConfig } from "vitepress";

const nav = [
  {
    text: "<img src='https://api.iconify.design/material-icon-theme:folder-javascript.svg '/> JavaScript",
    link: "/docs/javascript/test1",
    activeMatch: "/javascript/",
  },
  {
    text: "<img src='https://api.iconify.design/material-icon-theme:folder-typescript.svg '/> TypeScript",
    link: "/docs/typescript/arrays",
    activeMatch: "/typescript/",
  },
  {
    text: "<img src='https://api.iconify.design/material-icon-theme:folder-vue.svg '/> Vue Ecosystem",
    link: "/docs/vue/site-config",
    activeMatch: "/vue/",
  },
  {
    text: "<img src='https://api.iconify.design/material-icon-theme:folder-other.svg ' /> Other",
    link: "/docs/other/site-config",
    activeMatch: "/other/",
  },
];

const sidebar = {
  "/docs/javascript/": [
    {
      text: "<img src='https://api.iconify.design/material-icon-theme:javascript.svg '/> General",
      collapsable: true,
      items: [
        {
          text: "Test1",
          link: "/docs/javascript/test1",
        },
        {
          text: "Test2",
          link: "/docs/javascript/test2",
        },
      ],
    },
  ],
  "/docs/typescript/": [
    {
      text: "<img src='https://api.iconify.design/material-icon-theme:typescript.svg '/> General",
      collapsable: true,
      items: [
        {
          text: "Массивы",
          link: "/docs/typescript/arrays",
        },
        {
          text: "Test2",
          link: "/docs/typescript/test2",
        },
      ],
    },
  ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    theme: {
      light: {
        type: 'light',
        tokenColors: [
          {
            "scope": [
              "storage",
              "storage.type",
              "storage.modifier",
              "keyword",
              "keyword.control",
              "variable.language",
              "keyword.operator.new",
              "constant.language",
              "support.type.primitive",
              "support.type.builtin",
              "keyword.operator.expression",
              "keyword.operator"
            ],
            "settings": {
              "foreground": "#C900A4"
            }
          },
          {
            "scope": [
              "punctuation",
              "variable",
              "meta",
              "punctuation.definition.template-expression.begin",
              "punctuation.definition.template-expression.end",
              "entity.name.function",
              "source"
            ],
            "settings": {
              "foreground": "#000"
            }
          },
          {
            "scope": [
              "string",
              "punctuation.definition.string"
            ],
            "settings": {
              "foreground": "#DF0002"
            }
          },
          {
            "scope": [
              "constant.numeric"
            ],
            "settings": {
              "foreground": "#3A00DC"
            }
          },
          {
            "scope": [
              "support.variable.property",
            ],
            "settings": {
              "foreground": "#460084"
            }
          },
          {
            "scope": [
              "comment",
              "punctuation.definition.comment"
            ],
            "settings": {
              "foreground": "#008E00"
            }
          }
        ]
      },
      dark: "dark-plus"
    },
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache(),
      }),
    ],
    config(md) {
      md.use(groupIconMdPlugin);
    },
    lineNumbers: false,
    codeCopyButtonTitle: "Test",
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [{ icon: "github", link: "https://github.com//" }],

    editLink: {
      pattern: "https://github.com/duttdutt/docs/:path",
      text: "Edit this page on GitHub",
    },

    nav,
    sidebar,

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
