# 🟦 Flexbox

## 🚀 Features

- Resetting default browser spacing using the universal selector
- Creating reusable box components with fixed dimensions
- Building flexible layouts using CSS Flexbox
- Understanding how flex containers organize child elements
- Styling multiple elements using shared class structures
- Setting up a container with fixed dimensions for layout control

## 🧠 Key Concepts

### CSS Reset

The universal selector `*` removes default margin and padding to ensure consistent layout behavior across browsers.

### Reusable Box System

The `.box` class defines a fixed width and height of 100px, allowing consistent sizing across multiple elements.

### Flex Container

`.main` uses `display: flex`, which turns it into a flex container. All direct children become flex items and are arranged in a row by default.

### Flexbox Behavior

Even without additional flex properties enabled, Flexbox automatically controls horizontal layout flow and item alignment.

Commented properties show optional enhancements:

- `flex-direction` changes layout axis
- `flex-wrap` allows wrapping to new lines
- `justify-content` controls horizontal distribution
- `align-items` controls vertical alignment
- `gap` adds spacing between items

### Container Sizing

The `.main` container is fixed at 500x500px, providing a controlled space for observing Flexbox behavior.

### Class-Based Styling

Each box (`.a`, `.b`, `.c`, `.d`) is styled independently with different background colors while sharing the same `.box` structure.

## 🔧 Tech Stack

- CSS3