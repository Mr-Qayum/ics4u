# 🟦 Tailwind CSS

## 🚀 Features

- Styled using Tailwind CSS utility-first classes
- Applying spacing using margin utilities like `mt-5`
- Styling elements using background color utilities
- Positioning elements using `relative` and `absolute`
- Controlling layout flow with static and positioned elements
- Using fixed width and height utilities
- Placing elements precisely using `top` and `left` utilities
- Creating reusable layout structures using utility classes only
- Building UI without writing traditional CSS files
- Using Tailwind’s arbitrary value syntax (`[20px]`, `[100px]`)

## 🧠 Key Concepts

### Tailwind CSS

Tailwind can be added via a Content Delivery Network (CDN) by adding the following to the `<head>` section of an HTMl file:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### Spacing System

Spacing is applied using utility classes like `mt-5`, which directly sets margin-top using arbitrary values.

### Positioning

Elements use:

- `relative` on the parent container to establish positioning context
- `absolute` on child elements for precise placement

### Sizing

Fixed dimensions are applied using:

- `h-25`
- `w-25`

These control height and width directly from the HTML.

### Absolute Positioning

The red box uses:

- `left-50`
- `top-25`

This positions it relative to the nearest positioned ancestor.

### Background Colors

Tailwind provides predefined color scales:

- `bg-red-500`
- `bg-green-500`
- `bg-blue-500`
- `bg-violet-500`

### Layout Structure

The parent container is styled with `relative` positioning and a light background (`bg-pink-50`) to visually separate the layout.

### No External CSS

All styling is handled directly in HTML using utility classes, removing the need for separate CSS files.

## 🔧 Tech Stack

- Tailwind CSS