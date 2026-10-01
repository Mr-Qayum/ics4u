# 🟨 Basics

## 🚀 Features

- Creating a JavaScript project using the Vite build tool
- Using comments to describe code
- Declaring variables using `let` and `const`
- Understanding primitive and reference data types in JavaScript
- Working with strings using built-in methods and template literals
- Performing mathematical operations using arithmetic and shorthand operators
- Using comparison and logical operators for boolean expressions
- Writing functions using function declarations and arrow functions
- Using higher-order functions by passing functions as arguments
- Working with arrays including indexing, destructuring and spread syntax
- Transforming arrays using `map`, `filter` and `reduce`
- Creating and manipulating objects with properties and methods
- Using Sets to store unique values automatically
- Using Maps for flexible key-value storage
- Writing conditional logic using `if`, `else if`, ternary and `switch`
- Iterating using `for`, `while`, `do while`, `for...of` and `forEach`
- Handling asynchronous code using Promises
- Using `then`, `catch` and `finally` for Promise handling
- Combining async operations using `Promise.all` and `Promise.race`
- Writing asynchronous code using `async` and `await`

## 🧠 Key Concepts

### Vite

Vite is a fast and powerful web application building tool which supports many flavours of JavaScript like React, Vue, Svelte and Angular.

A Vite project can be create via the Node Package Manager (NPM) by following these steps:

1. Start VS Code.

2. Select **Open Folder** from the **File** menu and select **Desktop**, or any other known location.

3. Select **New Terminal** from the **Terminal** menu or use the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd> instead.

4. Run this command in the terminal (replace `my-project` with an appropriate project name).

```bash
npm create vite@latest my-project
```

5. Select **Vanilla** as the framework.

6. Select **JavaScript** as the variant.

7. Select **No** when asked to install and start.

8. Repeat steps 2 and 3, but this time select the newly created Vite project folder (`my-project`) in step 2.

9. Open another terminal window and run the following commands **separately**:

```bash
npm install
npm run dev
```

10. Hold the <kbd>Ctrl</kbd> key and left-click the URL to view the React project in a browser.

```bash
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

11. Press the trash icon in console or use the keyboard shortcut <kbd>Ctrl</kbd> + <kbd>C</kbd> to close the application.

### Variables

1. Variables should be defined using camel case (e.g. `myVariableName`)
2. Variables using `let` can be reassigned, but `const` variables cannot
3. Variables should always be declared using `const` unless they need to change
4. Variables are case-sensitive
5. Variables using `let` or `const` cannot be redeclared within the same scope
6. Arrays and objects using `const` can still have their contents modified

JavaScript uses `let` and `const` for variable declaration. `const` prevents reassignment while `let` allows values to change. Variables can store numbers, strings, booleans, arrays, objects, `null` and `undefined`.

### Strings

1. Strings have many helper functions built into them like `toUpperCase` and `split`
2. Use template literals when merging variables instead of the `+` operator
3. When variables are added to a string, JavaScript converts them to strings
4. Strings can include any character, including spaces, and have no size limit

Strings support built-in methods such as `toUpperCase`, `toLowerCase` and `split`. Template literals allow embedding variables using `${}`.

### Mathematical Operators

1. Mathematical operators should only be used with integers or decimals
2. JavaScript supports addition, subtraction, division, multiplication and modulus (remainder)
3. Wherever possible, use `x++`, `++x`, `x--` and `--x` when incrementing or decrementing variables by 1

JavaScript supports arithmetic operators `+`, `-`, `*`, `/`, `%` and shorthand assignment operators like `+=`, `-=`, `*=`, `/=`. Increment (`++`) and decrement (`--`) are commonly used.

### Boolean Operators

1. Boolean operators should only be used in expressions that should result in `true` or `false`
2. They can work with just about any type, if used correctly
3. It is important to note that JavaScript has truthy and falsy values

Comparison operators `>`, `<`, `>=`, `<=`, `==`, `===` evaluate expressions. Logical operators `&&` and `||` combine conditions. JavaScript also has truthy and falsy values.

### Functions

1. Functions are blocks of code that are executed upon invocation
2. They can take parameters or arguments, if necessary
3. They can only return a single value, if necessary
4. They can be written using the `function` keyword or arrow syntax `=>`

Functions are reusable blocks of code that accept parameters and return values. They can be written using function declarations or arrow functions. Higher-order functions allow functions to be passed as arguments.

### Arrays

1. Arrays can contain a set of values
2. Normally they contain values of the same type, but they can be mixed
3. The values can be unique or duplicates
4. Each value is indexed starting from `0` and ending at `length - 1`
5. They can use the spread operator `...` and be destructured
6. They have useful built-in functions like `map`, `filter` and `reduce`

Arrays store ordered collections of values and support indexing, destructuring, spread syntax and methods like `map`, `filter` and `reduce`.

### Objects

1. Objects can store keys and values as pairs
2. Keys can be accessed using the `.` operator or array-like syntax (e.g. `objectName["keyName"]`)
3. They can use the spread operator and be destructured
4. They also have useful built-in functions like `keys`, `values`, `entries` and `freeze`
5. They can have functions defined within them as well

Objects store key-value pairs and can include functions as methods. They support dot and bracket notation, destructuring, spread syntax and utilities like `Object.keys`, `Object.values`, `Object.entries`.

### Sets

1. A Set is a collection of unique values
2. Duplicate values are automatically ignored
3. Values can be of any type
4. Sets maintain insertion order
5. Useful functions include `add`, `delete`, `has` and `clear`

Sets store unique values and automatically remove duplicates. They support methods like `add`, `delete`, `has` and `clear`.

### Maps

1. A Map stores key-value pairs like an object
2. Keys can be any type (objects, numbers, strings, etc.)
3. Maps maintain insertion order
4. Useful functions include `set`, `get`, `has`, `delete` and `clear`

Maps store key-value pairs where keys can be any type and maintain insertion order. They support methods like `set`, `get`, `has`, `delete` and `clear`.

### Conditionals

1. Conditional statements allow code to execute, or not execute, when one or more conditions are met
2. The condition or conditions should evaluate to a boolean value

Conditional logic is handled using `if`, `else if`, `else`, ternary operators and `switch` statements.

### Loops

1. Loop statements allow blocks of code to execute multiple times (iterate) until some condition is met
2. Loops should always modify their condition within their code block, otherwise an infinite loop will occur

Loops include `for`, `while`, `do while`, `for...of` and `forEach`.

### Asynchronous JavaScript

1. JavaScript uses asynchronous programming to handle operations that take time (e.g. API requests or file I/O) without blocking the execution of other code
2. This allows the program to remain responsive while waiting for these operations to complete
3. JavaScript uses the `Promise` object to handle this

Promises handle asynchronous operations using `then`, `catch` and `finally`. `async` and `await` simplify async control flow.

## 🔧 Tech Stack

- Vite
- JavaScript