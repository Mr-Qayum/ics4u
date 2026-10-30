# 🟪 Basics

## 🚀 Features

- Interactive demonstrations of core React hooks
- State updates and re-render visualization
- `useEffect` lifecycle behavior (mount, update, unmount)
- `useRef` for persistent values and DOM manipulation
- `useMemo` for optimizing expensive computations
- Controlled inputs and real-time form updates
- Dynamic list rendering with keys
- Conditional rendering
- Derived state logic
- Reusable component structure

## 🧠 Key Concepts

### Component Architecture

The UI is structured using reusable components like `Intro` and `Step` to promote modularity and maintainability.

### State Management (`useState`)

State allows components to store and update data. Any update to state triggers a re-render of the component.

### Re-rendering

React re-runs components when state changes. It uses the **Virtual DOM** to efficiently update only the necessary parts of the real DOM.

### Refs (`useRef`)

Refs store mutable values without causing re-renders and can be used to directly interact with DOM elements.

### Side Effects (`useEffect`)

Handles lifecycle-related logic such as component mount, unmount, and updates based on dependencies.

### Memoization (`useMemo`)

Optimizes performance by preventing expensive calculations from running on every render unless dependencies change.

### Events

Handles user interactions such as button clicks and input changes.

### Lists and Keys

Rendering lists using `.map()` requires unique keys to help React track element changes efficiently.

### Controlled Inputs

Form inputs are managed using state to keep UI and data synchronized.

### Derived State

Values are computed from existing state instead of being stored separately.

### Fragments

Allow grouping multiple elements without adding extra nodes to the DOM.

## 🔧 Tech Stack

- Vite
- React
- TypeScript
- Node.js
- Tailwind CSS
