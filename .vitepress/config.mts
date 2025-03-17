import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import {
    transformerNotationWordHighlight,
  } from '@shikijs/transformers'
import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { defineConfig } from 'vitepress'

const nav = [
    {
        text: "<img src='https://api.iconify.design/material-icon-theme:folder-javascript.svg '/> JavaScript",
        link: '/docs/javascript/',
        activeMatch: '/javascript/',
    },
    {
        text: "<img src='https://api.iconify.design/material-icon-theme:folder-typescript.svg '/> TypeScript",
        link: '/docs/typescript/',
        activeMatch: '/typescript/',
    },
    {
        text: "<img src='https://api.iconify.design/material-icon-theme:folder-vue.svg '/> Vue",
        link: '/docs/vue/',
        activeMatch: '/vue/',
    },
    {
        text: "<img src='https://api.iconify.design/material-icon-theme:folder-other.svg ' /> Другое",
        link: '/docs/other/',
        activeMatch: '/other/',
    },
]

const sidebar = {
    '/docs/javascript/': [
        {
            text: "<img src='https://api.iconify.design/material-icon-theme:javascript.svg '/> Общее",
            collapsed: true,
            items: [
                {
                    text: 'Исполнение',
                    link: '/docs/javascript/Исполнение',
                },
            ],
        },
    ],
    '/docs/typescript/': [
        {
            text: "<img src='https://api.iconify.design/material-icon-theme:typescript.svg '/> General",
            collapsed: true,
            items: [
                {
                    text: 'Массивы',
                    link: '/docs/typescript/arrays',
                },
                {
                    text: 'Test2',
                    link: '/docs/typescript/test2',
                },
            ],
        },
    ],
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Заметки',
    description: 'A VitePress Site',
    appearance: 'dark',
    markdown: {
        theme: {
            light: 'material-theme-darker',
            dark: {
                semanticHighlighting: false,
                tokenColors: [
                    {
                        scope: ['string', 'support.type.property-name.json'],
                        settings: {
                            foreground: '#C3E88D',
                        },
                    },
                    {
                        scope: ['punctuation.definition.string'],
                        settings: {
                            foreground: '#D9F5DD',
                        },
                    },
                    {
                        scope: [
                            'keyword.operator.increment',
                            'keyword.operator.decrement',
                            'support.variable.property',
                            'variable.other.object.property',
                            'variable.other.property',
                            'meta.object-literal.key',
                            'keyword.operator.spread',
                            'keyword.operator.rest',
                            'keyword.operator.type',
                            'variable.object.property',
                        ],
                        settings: {
                            foreground: '#89DDFF',
                        },
                    },
                    {
                        scope: [
                            'variable',
                            'source',
                            'punctuation.separator',
                            'keyword.operator.type.annotation',
                            'punctuation.accessor',
                            'string.other.link.title',
                        ],
                        settings: {
                            foreground: '#BFC7D5',
                        },
                    },
                    {
                        scope: ['constant.numeric'],
                        settings: {
                            foreground: '#F78C6C',
                        },
                    },
                    {
                        scope: ['entity.name.function'],
                        settings: {
                            foreground: '#82AAFF',
                        },
                    },
                    {
                        scope: ['variable.parameter'],
                        settings: {
                            foreground: '#7986E7',
                        },
                    },
                    {
                        scope: [
                            'storage',
                            'storage.type',
                            'keyword',
                            'punctuation.accessor',
                            'keyword.operator.expression',
                        ],
                        settings: {
                            foreground: '#C792EA',
                        },
                    },
                    {
                        scope: [
                            'constant.language.null',
                            'constant.language.undefined',
                            'constant.language',
                            'keyword.operator.optional',
                        ],
                        settings: {
                            foreground: '#FF5874',
                        },
                    },
                    {
                        scope: ['markup.underline.link'],
                        settings: {
                            foreground: '#FF869A',
                        },
                    },
                    {
                        scope: [
                            'punctuation.definition.template-expression',
                            'punctuation.definition.metadata.markdown',
                        ],
                        settings: {
                            foreground: '#D3423E',
                        },
                    },
                    {
                        scope: [
                            'entity.name.type.class',
                            'entity.name',
                            'support.type',
                            'support.class',
                            'meta.use',
                            'entity.other.attribute-name.class',
                            'source.css entity.name.tag',
                            'support.class.component',
                            'support.type',
                            'constant.other.key',
                            'entity.other.inherited-class',
                            'entity.other',
                            'entity.name.type',
                            'support.class',
                            'support.type.primitive',
                            'support.type.builtin',
                        ],
                        settings: {
                            foreground: '#FFCB6B',
                        },
                    },
                    {
                        scope: [
                            'meta.structure.dictionary.value.json string.quoted.double',
                        ],
                        settings: {
                            foreground: '#80CBC4',
                        },
                    },
                    {
                        scope: [
                            'comment',
                            'punctuation.definition.comment',
                            'comment.block.html',
                        ],
                        settings: {
                            foreground: '#697098',
                            fontStyle: 'italic',
                        },
                    },
                ],
            },
        },
        codeTransformers: [
            transformerTwoslash({
                typesCache: createFileSystemTypesCache(),
                errorRendering: 'line',
            }),
            // transformerNotationWordHighlight({
            //     matchAlgorithm: 'v3'
            // })
        ],
        config(md) {
            md.use(groupIconMdPlugin)
        },
        lineNumbers: false,
        codeCopyButtonTitle: 'Test',
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        socialLinks: [{ icon: 'github', link: 'https://github.com//' }],

        editLink: {
            pattern: 'https://github.com/duttdutt/docs/:path',
            text: 'GitHub',
        },

        nav,
        sidebar,

        // socialLinks: [
        //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
    },
})
