# Массивы

- Чтобы типизировать массив, мы можем использовать любой примитивный тип с указанием квадратных скобок: `string[]`, `number[]`, `boolean[]`, `any[]`, тд.
- Также можно использовать — встроенный дженерик `Array<T>`, где `T` — тип элементов в массиве.

# Тип `Array`

Generic object types are often some sort of container type that work independently of the type of elements they contain. It’s ideal for data structures to work this way so that they’re re-usable across different data types.

It turns out we’ve been working with a type just like that throughout this handbook: the Array type. Whenever we write out types like number[] or string[], that’s really just a shorthand for `Array<number>` and `Array<string>`.

```ts twoslash
function doSomething(value: Array<string>) {
  // ...
}

let myArray: string[] = ["hello", "world"];

// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```

Much like the Box type above, Array itself is a generic type.

```ts twoslash
interface Array<Type> {
/\*\*

- Gets or sets the length of the array.
  \*/
  length: number;

/\*\*

- Removes the last element from an array and returns it.
  \*/
  pop(): Type | undefined;

/\*\*

- Appends new elements to an array, and returns the new length of the array.
  \*/
  push(...items: Type[]): number;

// ...
}
```

Modern JavaScript also provides other data structures which are generic, like `Map<K, V>`, `Set<T>`, and `Promise<T>`. All this really means is that because of how Map, Set, and Promise behave, they can work with any sets of types.

# The `ReadonlyArray` Type

The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.

```ts twoslash
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'. // [!code error]
}
```

Much like the readonly modifier for properties, it’s mainly a tool we can use for intent. When we see a function that returns ReadonlyArrays, it tells us we’re not meant to change the contents at all, and when we see a function that consumes ReadonlyArrays, it tells us that we can pass any array into that function without worrying that it will change its contents.

Unlike Array, there isn’t a ReadonlyArray constructor that we can use.

```ts twoslash
// @errors: 2693
new ReadonlyArray("red", "green", "blue"); // [!code error]
```

`ReadonlyArray` only refers to a type, but is being used as a value here.
Instead, we can assign regular `Arrays` to `ReadonlyArrays`.

```ts twoslash
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

Just as TypeScript provides a shorthand syntax for `Array<Type>` with `Type[]`, it also provides a shorthand syntax for `ReadonlyArray<Type>` with `readonly Type[]`.

```ts twoslash [test.ts]
// @errors: 2339
function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
  // ...but we can't mutate 'values'.
  values.push("hello!");
}
```

One last thing to note is that unlike the readonly property modifier, assignability isn’t bidirectional between regular Arrays and ReadonlyArrays.

```ts twoslash
// @errors: 4104
let x: readonly string[] = [];
let y: string[] = [];

x = y;
y = x;
```
