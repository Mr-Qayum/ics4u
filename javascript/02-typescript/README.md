# 🟨 TypeScript

## 🚀 Features

- Declaring strongly typed variables using TypeScript primitives
- Using explicit type annotations for numbers, strings, booleans and objects
- Working with arrays using both `type[]` and `Array<T>` syntax
- Using tuples for fixed-length, typed arrays
- Writing functions with typed parameters and return values
- Using `void` return types for functions with no return value
- Understanding `any` vs `unknown` for type safety
- Using type narrowing with `typeof` checks
- Creating enums for fixed sets of constants
- Defining reusable types using `type` aliases
- Defining object shapes using `interface`
- Using optional properties in interfaces
- Creating union types for flexible value constraints
- Using literal types for strict value restrictions
- Combining types using intersection types
- Using utility types like `Partial` and `Pick`
- Understanding extensibility of types in TypeScript

## 🧠 Key Concepts

### Primitive Types

TypeScript adds static typing on top of JavaScript primitives such as `string`, `number`, `boolean`, `null`, `undefined`, `symbol` and `bigint`. This allows variables to have explicit, enforced types.

### Any vs Unknown

`any` disables type checking and allows any operation on a value. `unknown` is safer because it requires type checking before use, enforcing type narrowing.

### Type Narrowing

Using `typeof` allows TypeScript to refine a variable’s type before performing operations on it, ensuring type safety at runtime.

### Arrays and Tuples

Arrays can be typed using `type[]` or `Array<type>`. Tuples define fixed-length arrays with specific types for each position.

### Functions

Functions in TypeScript explicitly define parameter types and return types. This ensures correct usage and prevents invalid inputs or outputs.

### Void Functions

A `void` return type indicates a function does not return a value.

### Enums

Enums define a set of named constants, improving readability and restricting values to predefined options.

### Type Aliases

`type` allows creation of reusable type definitions including unions, intersections and object shapes.

### Interfaces

Interfaces define object structures and are commonly used for class and object typing. They support optional properties using `?`.

### Union Types

Union types allow a variable to hold one of several possible types, increasing flexibility while maintaining safety.

### Literal Types

Literal types restrict a variable to specific string or numeric values.

### Intersection Types

Intersection types combine multiple types into one, requiring all properties to exist.

### Utility Types

TypeScript provides utility types like:

- `Partial<T>` to make all properties optional
- `Pick<T, K>` to select specific properties from a type

## 🔧 Tech Stack

- TypeScript