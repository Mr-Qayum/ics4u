# 🟪 Forms

## 🚀 Features

- Controlled form inputs using React state
- Reusable input components for numbers and text
- Form submission handling with event prevention
- Conditional rendering of results based on logic
- Derived state updates based on user input
- Separation of UI into smaller components

## 🧠 Key Concepts

### State Management with `useState`

The app uses multiple state variables to track input values and computed results. Each piece of data is managed independently, reinforcing how React handles state in functional components.

### Controlled Components

All inputs are controlled through React state. The input values are tied directly to state, and updates happen through `onChange` handlers. This ensures React is the single source of truth.

### Lifting State and Passing Props

State is managed in the parent component and passed down to child components as props. Setter functions are also passed down, allowing child components to update parent state.

### Component Reusability

Custom components like `NumberInput` and `TextInput` demonstrate how UI elements can be reused with different props, promoting modular and maintainable code.

### Event Handling in Forms

The form uses a submit handler with `SyntheticEvent`. The `preventDefault` method is used to stop the default browser behavior, allowing full control within React.

### One-Way Data Flow

Data flows from parent to child via props. Updates happen through callback functions, reinforcing React’s unidirectional data flow model.

### Type Safety with TypeScript

Props and events are strongly typed, helping prevent bugs and improving developer experience through better tooling and autocomplete.

### Conditional Logic in Components

The component includes logic to handle different scenarios before updating state, showing how decision-making is integrated into React components.

## 🔧 Tech Stack

- Vite
- React
- TypeScript
- Node.js
- Tailwind CSS
- Biome
