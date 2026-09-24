# 🟦 Grid

## 🚀 Features

- Resetting default browser spacing using the universal selector
- Creating fixed-size layout containers
- Building layouts using CSS Grid
- Defining grid structure using `grid-template-areas`
- Assigning elements to named grid areas
- Centering content using `justify-items` and `align-items`
- Creating responsive layouts using media queries
- Changing grid layout based on screen width
- Organizing layout into semantic grid regions
- Styling multiple grid items using class-based selectors

## 🧠 Key Concepts

### CSS Reset

The universal selector `*` removes default margin and padding to create a consistent layout foundation across browsers.

### Grid Layout System

`.main` uses `display: grid`, which turns the container into a grid-based layout system where children are placed into defined grid cells.

### Grid Template Areas

`grid-template-areas` allows developers to define layout visually using named regions like `"a"`, `"b"`, `"c"`, etc. Each child element is assigned to a region using `grid-area`.

### Item Placement

Each box (`.a` to `.e`) is placed into the grid using the `grid-area` property, allowing precise layout control without manual positioning.

### Alignment in Grid

- `justify-items: center` horizontally centers items within their grid cells
- `align-items: center` vertically centers items within their grid cells

### Responsive Design

A media query is used to adjust layout when the screen width changes. In this case, the grid collapses into a single-column layout for smaller screens.

### Media Queries

`@media (max-width: 1000px)` applies alternative styling when the viewport is 1000px or smaller, enabling responsive design behavior.

### Class-Based Styling

Each grid item has its own background color while sharing the same sizing rules from the `.box` class.

## 🔧 Tech Stack

- CSS3