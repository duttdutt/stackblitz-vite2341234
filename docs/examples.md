# Markdown Extension Examples

## [Markdown](https://vitepress.dev/guide/markdown)

## Links

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### Custom Containers

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

:::warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## [Shiki](https://github.com/shikijs/shiki)

Modi nemo unde alias corrupti ad. Minus `quod` ipsum.

```js:line-numbers {1-2,7}
export default {
  data () {
    return {
      msg: 'Highlighted!'// [!code highlight]
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  } // [!code focus]
}

++diff; // [!code ++]
--diff; // [!code --]
```

#### Code Groups

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts twoslash [vite.config.js]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

#### TwoSlash

```typescript twoslash
function test(a: number, b: number): number {
  return a + b;
}
```

```ts twoslash
console.log("hello");
//      ^?
```

```json [package.json]
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

```ts twoslash
const a = 1;
// @log: Custom log message
const b = 1;
// @error: Custom error message
const c = 1;
// @warn: Custom warning message
const d = 1;
// @annotate: Custom annotation message
```
