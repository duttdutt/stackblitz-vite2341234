import Markdown from 'markdown-it';
import { Plugin } from 'vite';

declare function localIconLoader(url: string, path: string): string;

interface MdPluginOptions {
    titleBar: {
        /**
         * Whether the title bar is included in the [Snippets](https://vitepress.dev/guide/markdown#import-code-snippets)
         *
         * @defaultValue false
         */
        includeSnippet?: boolean;
    };
}
declare function groupIconMdPlugin(md: Markdown, options?: MdPluginOptions): void;

interface Options {
    customIcon: Record<string, string>;
}
declare function groupIconVitePlugin(options?: Options): Plugin;

export { type Options, groupIconMdPlugin, groupIconVitePlugin, localIconLoader };
