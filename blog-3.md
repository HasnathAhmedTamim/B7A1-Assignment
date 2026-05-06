# How Generics Allow You to Build Reusable Components and Functions with Strong Type Safety in TypeScript

## Introduction

In TypeScript, generics allow developers to create reusable functions, classes, and components that work with different data types while still maintaining strict type safety. Instead of writing multiple versions of the same logic for different types, generics let us write one flexible solution that adapts to any data structure.

## What are Generics?

Generics are a way to pass types as parameters to functions or classes. They allow TypeScript to preserve type information while still making code reusable.

## Why Generics are useful

Without generics, developers often need to repeat the same logic for different types, which leads to code duplication.

### Example without generics:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
````

* This approach is not scalable because we must write separate functions for each type.

## How Generics solve this problem

With generics, we can write a single function that works for all types while still keeping type safety.

### Example with generics:

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Omen");
identity<number>(520);
```

* Here, `T` represents a dynamic type that is decided when the function is used.

---

## Generics in objects (real use case)

Generics are very powerful when working with objects and APIs.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### Example usage:

```ts id="gen3"
const user = {
  id: 1,
  name: "John",
  age: 25
};

getProperty(user, "name");
```

This ensures:

* Only valid keys can be accessed
* Return type is automatically correct
* No risk of runtime errors

## Benefits of Generics

Generics provide several advantages:

* Code reusability
* Strong type safety
* Reduced duplication
* Better scalability for large applications
* Improved developer experience

## Conclusion

Generics allow developers to build reusable and flexible components in TypeScript while maintaining strict type safety. They eliminate code duplication by enabling one solution to work with multiple data types. This makes applications more scalable, maintainable, and reliable in large-scale projects.
