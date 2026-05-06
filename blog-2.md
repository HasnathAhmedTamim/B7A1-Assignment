# How `Pick` and `Omit` Utility Types Prevent Code Duplication and Keep TypeScript Code DRY

## Introduction

In TypeScript, large applications often use complex interfaces to define data models. However, not every part of an interface is needed everywhere in the application. To solve this problem, TypeScript provides utility types like `Pick` and `Omit`. These help create smaller, reusable “slices” of a larger interface without rewriting code. This follows the DRY (Don't Repeat Yourself) principle.

## What is DRY (Don't Repeat Yourself)?

DRY is a programming principle that means we should avoid repeating the same code in multiple places. Instead, we should reuse existing code to make applications easier to maintain and update.

## What is `Pick`?

`Pick` allows us to create a new type by selecting only specific properties from an existing interface.

### Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Pick<User, "id" | "name">;
````

Here, `UserPreview` only contains `id` and `name`.

* This prevents duplication because we don’t rewrite a new interface.


## What is `Omit`?

`Omit` allows us to create a new type by removing specific properties from an existing interface.

### Example:

```ts id="o7r4vn"
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

Here, `PublicUser` removes the sensitive `password` field.

* This avoids rewriting the whole interface again.

## How they reduce code duplication

Without `Pick` and `Omit`, developers would manually create multiple interfaces like:

```ts
interface UserPreview {
  id: number;
  name: string;
}

interface PublicUser {
  id: number;
  name: string;
  email: string;
}
```

This leads to:

* Repeated code
* Hard maintenance
* Risk of inconsistency

With `Pick` and `Omit`, we reuse the original interface instead of duplicating it.


## How this keeps code DRY

Using `Pick` and `Omit` ensures:

* We reuse existing interfaces
* We avoid rewriting similar types
* Changes in the main interface automatically reflect in derived types
* Code becomes cleaner and easier to maintain


## Conclusion

`Pick` and `Omit` utility types help prevent code duplication by allowing developers to create smaller, specialized versions of existing interfaces. This follows the `DRY principle`, making TypeScript code more reusable, consistent, and easier to maintain in large-scale applications.
