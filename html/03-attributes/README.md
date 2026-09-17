# 🟩 HTML Attributes

## 🚀 Features

- Understanding what HTML attributes are and how they modify elements
- Using global attributes like `id`, `class`, and `title`
- Creating hyperlinks using `href` and `target` attributes
- Embedding images using `src` and `alt`
- Learning boolean attributes and how they work
- Using data attributes (`data-*`) to store custom information in HTML elements

## 🧠 Key Concepts

### What are Attributes?

Attributes provide additional information about HTML elements.

- They are written inside the opening tag
- They use the format `name="value"` with an equal sign (`=`)
- They modify behavior or appearance of elements

### Common Global Attributes

Global attributes can be used on most HTML elements:

- `id` → unique identifier for an element
- `class` → groups elements together for styling or selection
- `title` → shows tooltip text on hover

Example:

- Hover over elements using the `title` attribute
- Use `id` for unique elements
- Use `class` for grouping

### Link Attributes

Used with `<a>` elements:

- `href` → destination URL
- `target` → where the link opens (`_blank` opens a new tab)

Example use:

- Links can navigate to external websites
- `target="_blank"` opens a new tab

### Image Attributes

Used with `<img>` elements:

- `src` → image source path
- `alt` → alternative text for accessibility

Key idea:

- `alt` improves accessibility for screen readers
- `src` defines where the image comes from

### Boolean Attributes

Boolean attributes do not require a value.

- If the attribute is present → it is **true**
- If it is missing → it is **false**

Common examples:

- `hidden` → hides the element
- `contenteditable` → makes element editable
- `draggable` → allows dragging
- `spellcheck` → enables spell checking
- `disabled` → disables interaction (when supported)
- `readonly` → makes content non-editable
- `required` → makes a field mandatory
- `checked` → pre-selects an option
- `multiple` → allows multiple selections
- `open` → keeps a collapsible element open

Example concept:

- `<p hidden>` → element exists but is not visible

### Data Attributes

Data attributes store custom information inside HTML elements.

- Always start with `data-`
- Used to store extra information without affecting layout
- Can hold any custom value

Example:

- `data-user-id="123"`
- `data-role="admin"`

Key idea:

- HTML structure stays clean
- Extra data is stored for later use (usually JavaScript)

## 🔧 Tech Stack

- HTML5