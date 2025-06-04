Both `Type` and `Interface` are used to define the structure of an object in typescript.

While Interface is extendable and primarily for shape of an object or class.

Type is more versatile allowing unions, intersection and more complex type definations.

You can form a `Type` from an `Interface` but not `Interface` from a type.

## Type

In Typescript basically a type is a shape of an object it can be a number , string , and Builtin types or User defined types so on.

Primitive types, object types, union types, intersection types etc

No Declaration merging.

Partial, Omit, Pick, Record<Keys, Type>, ReadOnly

```ts
    type A = {
        userId: Number,
        name: string;
        age?: Number
    };

    type Sort = "desc" | "asc";
```
## Interface


