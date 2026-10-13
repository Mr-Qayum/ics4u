# 🟨 Forms

## 🚀 Features

- Handling HTML form submissions using TypeScript
- Preventing default form behavior using `event.preventDefault()`
- Reading form values using the `FormData` API
- Converting string inputs into numbers using `Number()`
- Performing mathematical calculations using user input
- Implementing conditional logic based on computed values
- Displaying computed results in DOM input fields
- Handling multiple outcomes using `if / else if / else` logic
- Using TypeScript type assertions for form and input elements

## 🧠 Key Concepts

### Typed Form Handling

TypeScript allows forms to be typed as `HTMLFormElement`, enabling safer access to form methods and properties while maintaining DOM compatibility.

### FormData API

`FormData` is used to extract values from HTML forms in a structured way. It returns values as strings or `FormDataEntryValue`, which often require conversion.

### Type Conversion

Form values are strings by default. `Number()` is used to convert input values into numeric types before performing calculations.

### Preventing Default Behavior

`event.preventDefault()` stops the browser from refreshing or submitting the form, allowing JavaScript to handle logic instead.

### Conditional Logic Flow

The discriminant is used to determine branching logic:

- Negative → no real roots
- Positive → two roots
- Zero → one repeated root

### DOM Output Updates

Results are displayed by selecting DOM elements (e.g. input fields) and updating their `.value` property.

### Type Assertions in DOM Access

TypeScript requires explicit casting (e.g. `as HTMLInputElement`) when accessing element-specific properties like `.value`.

### Styling

CSS markup is used to style HTML elements

## 🔧 Tech Stack

- Tailwind CSS
