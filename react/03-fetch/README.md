# 🟪 APIs

## 🚀 Features

- Fetching and displaying data from an external API
- Dynamic rendering of lists using `.map()`
- Clickable table rows triggering additional data fetches
- Modal component for displaying detailed information
- Conditional rendering based on loading and selected state
- Reusable `Table` and `Modal` components
- Handling asynchronous data and UI updates

## 🧠 Key Concepts

### Data Fetching with `useEffect`

The app uses `useEffect` to fetch data when the component mounts. This demonstrates how side effects like API calls are handled in React functional components.

### Asynchronous JavaScript in React

Both `fetch` and `axios` are used to handle asynchronous requests. This shows different approaches to working with promises and async/await inside React.

### State Management for Async Data

Multiple pieces of state are used to manage:

- Fetched data
- Selected item
- UI state like modal visibility

This reinforces how React handles complex UI state.

### Conditional Rendering

The UI updates based on state conditions:

- Loading indicator when data is being fetched
- Modal only appears when triggered
- Data safely accessed using optional chaining

### List Rendering with Keys

The `.map()` function is used to render table rows dynamically. Each row includes a unique `key`, which is essential for React’s reconciliation process.

### Event Handling in React

Click events are used to trigger data fetching and UI changes. This highlights how user interaction drives state updates.

### Component Composition

The app is broken into reusable components like `Table` and `Modal`. This shows how complex UIs can be built from smaller, focused components.

### Children Prop Pattern

Both `Table` and `Modal` use the `children` prop to allow flexible content rendering. This is a key pattern for building reusable layout components.

### Controlled UI with State

The modal’s visibility is fully controlled through state. This demonstrates how UI elements can be shown or hidden based on application state.

### Type Safety with TypeScript

Custom types are defined for API data and component props. This improves reliability and ensures consistent data structures across the app.

### Event Propagation Control

The modal prevents click events from bubbling using `stopPropagation`, showing how React handles DOM event flow.

## 🔧 Tech Stack

- Vite
- React
- TypeScript
- Node.js
- Tailwind CSS
- Axios
- Biome
