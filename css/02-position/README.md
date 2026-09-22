# 🟦 Position

## 🚀 Features

- Resetting default browser spacing using the universal selector
- Creating layout containers using parent-child structure
- Working with CSS positioning (`relative` and `absolute`)
- Understanding how positioned elements interact with the document flow
- Applying fixed dimensions to elements using height and width
- Styling multiple elements using shared and individual class selectors
- Controlling element placement using `top` and `left` properties

## 🧠 Key Concepts

### CSS Reset

The universal selector `*` is used to remove default padding and margin from all elements. This creates a consistent baseline across browsers.

### Layout Structure

A parent container (`.main`) holds multiple child `.box` elements. This structure is commonly used for layout and positioning practice.

### Positioning Context

`.main` uses `position: relative`, which establishes a positioning context for absolutely positioned children inside it.

### Absolute Positioning

`.a` uses `position: absolute`, meaning it is removed from normal document flow and positioned relative to its nearest positioned ancestor (`.main`).

The properties `left` and `top` are used to place it precisely on the page.

### Static Elements

Elements like `.b`, `.c`, and `.d` remain in normal document flow because they do not have a `position` property applied.

### Fixed Dimensions

All `.box` elements share fixed `height` and `width`, ensuring consistent sizing regardless of content.

### Class-Based Styling

Each box uses a unique class (`.a`, `.b`, `.c`, `.d`) to apply different background colors while sharing base styles from `.box`.

## 🔧 Tech Stack

- CSS3