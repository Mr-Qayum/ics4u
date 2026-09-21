# 🟦 Basics

## 🚀 Features

- Writing and using comments in CSS for readability and organization
- Using a global CSS reset to remove default browser styling inconsistencies
- Integrating custom fonts using Google Fonts
- Understanding CSS styling methods including external, internal and inline CSS
- Learning CSS specificity and cascade order
- Applying the CSS box model (content, padding, border, margin)
- Selecting elements using multiple selector types
- Styling elements using type, class and ID selectors
- Using combinator selectors to target nested and related elements
- Applying pseudo-class selectors for interactive states
- Using pseudo-elements to style parts of elements
- Using attribute selectors to target elements dynamically
- Grouping selectors for shared styling rules
- Building structured layout styling using box model principles

## 🧠 Key Concepts

### CSS Comments

Comments in CSS are used to explain code, organize sections, or temporarily disable styles. They are ignored by the browser.

Syntax:

```css
/* This is a CSS comment */
```

### Box Model

Every HTML element follows the box model:

- Content (center)
- Padding (space around content)
- Border (edge around padding)
- Margin (outer spacing)

Understanding this model is essential for layout control.

### CSS Styling Methods

CSS can be applied in four main ways:

- Browser defaults
- External CSS (recommended)
- Internal CSS
- Inline CSS

Specificity increases as you move down this list, meaning inline styles override external styles.

### CSS Reset

Browsers apply default styles (like margins on headings and paragraphs), which can differ between browsers. A **CSS reset** removes these inconsistencies so you start from a clean slate.

Example reset used in this project:

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Custom Fonts (Google Fonts)

Custom fonts can be added using services like Google Fonts by including a <link> in the HTML <head>:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
```

These fonts can then be applied using CSS:

```css
* {
  font-family: 'Roboto', sans-serif;
}
```

Using preconnect improves performance by establishing early connections to the font servers.

### Selectors

CSS provides multiple ways to target elements:

- Universal selector (`*`)
- Type selector (`div`, `p`, `a`)
- Class selector (`.class`)
- ID selector (`#id`)
- Attribute selectors (`[target]`)
- Combinator selectors (descendant, child, sibling)
- Pseudo-classes (`:hover`, `:active`, etc.)
- Pseudo-elements (`::first-letter`, etc.)

### Class and ID Styling

Classes allow reusable styles across multiple elements, while IDs are unique and apply to a single element.

### Combinator Selectors

- Descendant (`ul li p`) selects nested elements
- Child (`>`) selects direct children only
- Adjacent sibling (`+`) selects the next sibling
- General sibling (`~`) selects all following siblings

### Pseudo-Classes

Pseudo-classes style elements based on state:

- `:link` unvisited links
- `:visited` visited links
- `:hover` mouse over
- `:active` clicked state
- `:nth-child()` targets specific elements in a group

### Pseudo-Elements

Pseudo-elements style parts of elements, such as:

- `::first-letter` for styling the first character

### Attribute Selectors

Attribute selectors target elements based on attributes, such as `[target]` for links that open in a new tab.

## 🔧 Tech Stack

- CSS3