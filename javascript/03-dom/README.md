# 🟨 Document Object Model (DOM)

## 🚀 Features

- Tailwind CSS plugin
- Selecting DOM elements using TypeScript-typed DOM APIs
- Using type assertions with `as` to refine DOM element types
- Safely handling nullable DOM elements with `null` checks
- Working with `HTMLCollectionOf<T>` for typed element collections
- Iterating over DOM collections using `for...of`
- Dynamically creating DOM elements using `document.createElement`
- Appending elements to the DOM using `appendChild`
- Manipulating element styles using the `style` property
- Updating text content using `innerText` and `innerHTML`
- Creating and configuring anchor elements with attributes
- Creating and styling buttons dynamically
- Handling DOM events using `addEventListener`
- Implementing UI state toggling using boolean variables
- Updating UI conditionally based on state
- Applying inline CSS dynamically using `style.cssText`

## 🧠 Key Concepts

### Tailwind CSS

Instead of using Tailwind CSS via a CDN, Vite can be configured to use it as a plugin. This allows for a more customizable, efficient and productive Tailwind CSS integration.

Run the following command in the terminal:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Update the `vite.config.js` file to include `tailwindcss` in the `plugins` array:

```js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

Replace the contents of `index.css` with the following import:

```js
@import "tailwindcss";
```

### DOM Selection with TypeScript

TypeScript allows DOM elements to be selected using standard methods like `getElementById`, `getElementsByTagName` and `getElementsByClassName`, but requires explicit typing or type assertions to ensure safe access to element properties.

### Type Assertions

The `as` keyword is used to assert the type of a DOM element (e.g. `HTMLElement`, `HTMLDivElement`). This tells TypeScript what specific element type is expected so properties like `style` become accessible.

### Null Safety

DOM queries like `getElementById` may return `null`. Type checking with `if (element)` ensures safe access before manipulating the element.

### HTML Collections

`HTMLCollectionOf<T>` represents a live collection of DOM elements. It can be iterated using `for...of` and supports direct style and property manipulation when typed correctly.

### Dynamic Element Creation

Elements can be created at runtime using `document.createElement`, then configured with properties like `innerText`, `href` and `style` before being appended to the document.

### Event Handling

Events such as `click` are handled using `addEventListener`, enabling interactive UI behavior.

### State Management in Vanilla TS

Simple UI state can be managed using boolean variables (e.g. `show`) to toggle visibility or behavior.

### Style Manipulation

Element styling can be controlled using the `style` object or `style.cssText` for applying multiple CSS rules at once.

### DOM Manipulation Flow

A typical DOM workflow includes:

1. Select elements
2. Modify properties or styles
3. Create new elements
4. Append to DOM
5. Attach event listeners for interactivity

## 🔧 Tech Stack

- Vite
- TypeScript
- Tailwind CSS