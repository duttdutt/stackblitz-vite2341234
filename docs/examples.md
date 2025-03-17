# Markdown Extension Examples

## [Markdown](https://vitepress.dev/guide/markdown)

## Links

```ts
{
    const original = {
        foo: 1,
        bar: null,
        baz: NaN,
        qux: {
            quux: 100,
            rez: undefined,
            qwe: Infinity,
        },
    }

    const copy = { ...original }
    console.log('Upper lvl:', copy === original) // false
    console.log('Inside lvl:', copy.qux === original.qux) // true
}
// --------------------------
console.log('--------------')
// --------------------------
{
    const foo = { a: 100 }
    const bar = { c: 300 }
    const merged = { ...foo, b: 200, ...bar }
    console.log('Merging:', merged)
}

/* keyof */
interface Person {
    name: string
    age: number
    location: string
}
let propName: keyof Person // "name" | "age" | "location"
let age: Person['age'] //=>
let nameOrAge: Person['name' | 'age'] //=>

function get<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
    return obj[propertyName]
}
let x = { foo: 100, bar: 'Hello!' }
get(x, 'bar')
get(x, 'foo')
// ↓ Error: Argument of type 'baz' is not assignable to parameter of type 'foo' | 'bar'.
// get(x, "baz");

/* Mapped Types */
interface Person {
    name: string //=>
    age: number //=>
    location: string //=>
}
interface PartialPerson {
    name?: string //=>
    age?: number //=>
    location?: string //=>
}
interface FrozenPerson {
    readonly name: string //=>
    readonly age: number //=>
    readonly location: string //=>
}
// 1st
type BooleaninifedPerson = {
    [P in 'name' | 'age' | 'location']: boolean
}
// 2nd
type BooleaninifedPerson2 = {
    [P in keyof Person]: boolean
}
const boolenifiedPerson: BooleaninifedPerson2 = {
    age: true,
    location: true,
    name: true,
}
// -----------------------------------------

function doSomething(value: Array<string>) {
    // ...
}

let myArray: string[] = ['hello', 'world']

// either of these work!
doSomething(myArray)
doSomething(new Array('hello', 'world'))
const testing = 'asdf'

true
false
null
undefined
Infinity
NaN
1
2
3
100
;('string')
;('some text')
;`asdf ${testing} asdf`
typeof testing
```

```js
export function arrayUnique(array) {
    return Array.from(new Set(array))
}

export function isTesting() {
    return (
        navigator.userAgent,
        navigator.userAgent.includes('Node.js') ||
            navigator.userAgent.includes('jsdom')
    )
}

export function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2')
}

function findAges(data, age1, age2) {
    const result = []
    let nearestAge = null

    for (let i = 0; i < data.length; i++) {
        const currentAge = data[i].age

        if (currentAge < age1) {
            if (nearestAge === null || currentAge > nearestAge)
                // запоминаем, если тек. больше ближ.
                nearestAge = currentAge

            continue
        }

        if (currentAge > age2) break

        result.push(currentAge)
    }

    return result
}

const data = [{ age: 10 }, { age: 15 }, { age: 16 }, { age: 20 }, { age: 21 }]

console.log(findAges(data, 11, 13))

export default data
```

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
}

export default config
```

```ts twoslash [vite.config.js]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
    // ...
}

export default config
```

:::

#### TwoSlash

```typescript twoslash
function test(a: number, b: number): number {
    return a + b
}
```

```ts twoslash
console.log('hello')
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
const a = 1
// @log: Custom log message
const b = 1
// @error: Custom error message
const c = 1
// @warn: Custom warning message
const d = 1
// @annotate: Custom annotation message
```
