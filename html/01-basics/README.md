# 🟩 HTML Basics

## 🚀 Features

- Installing and using **Live Server**
- Declaring comments using `<!-- -->`
- Structuring a complete HTML document using `doctype`, `html`, `head` and `body`
- Using headings (`h1` to `h6`) to define document hierarchy
- Creating paragraphs using `<p>` for text content blocks
- Demonstrating automatic line breaks in block elements
- Applying text formatting using inline elements (`b`, `i`, `u`, etc.)
- Displaying code using `<pre>` and `<code>`
- Using quotation elements (`blockquote`, `q`)
- Understanding inline vs block elements through visual examples
- Creating unordered and ordered lists for structured data display
- Constructing tables using rows, headers and data cells
- Grouping content using `<div>` containers

## 🧠 Key Concepts

### Live Server

When working with HTML files, it is recommended to use **Live Server** in VS Code.

- Serves your HTML file on a local development server
- Automatically refreshes the browser when you save changes
- Helps you instantly see updates without manually reloading the page
- Mimics how real websites are served instead of opening files directly

To use it:

- Install the **Live Server** extension in VS Code
- Right-click your HTML file
- Click **“Open with Live Server”**

### HTML Comments and Document Structure Notes

`<!-- This is a comment. -->`

- HTML comments are ignored by the browser
- They begin with `<!--` and end with `-->`
- They are used for notes, explanations, or reminders in code

### HTML Document Structure

Every webpage follows a standard structure:

- `<!doctype html>` defines HTML5
- `<html>` is the root element
- `<head>` contains metadata and title
- `<body>` contains visible page content

### Headings

Headings define the structure of the page:

- `<h1>` is the main heading
- `<h2>`–`<h6>` represent decreasing levels of importance

### Paragraphs

Paragraphs are block elements used for text:

- `<p>` creates a new block of text
- Each paragraph automatically starts on a new line

### Text Formatting

Inline elements are used to style parts of text:

- `<b>` bold text
- `<strong>` important text
- `<i>` italic text
- `<em>` emphasized text
- `<u>` underlined text
- `<mark>` highlighted text
- `<small>` smaller text
- `<del>` deleted text
- `<ins>` inserted text
- `<sub>` subscript (e.g., H₂O)
- `<sup>` superscript (e.g., x²)

### Code and Quotes

Special elements for displaying content:

- `<pre>` preserves spacing and formatting
- `<code>` displays inline code
- `<blockquote>` for longer quotes
- `<q>` for short inline quotes

### Inline vs Block Elements

HTML elements fall into two categories:

- **Block elements**
  - Start on a new line
  - Take up the full width available
  - Examples: `<p>`, `<div>`, `<h1>`

- **Inline elements**
  - Do not start on a new line
  - Only take up as much width as needed
  - Examples: `<span>`, `<b>`, `<i>`, `<u>`

### Content Organization

Content can be grouped using:

- `<div>` to organize sections of the page
- Nested elements to create structure

### Lists

Two list types:

- `<ul>` unordered (bullets)
- `<ol>` ordered (numbers)
- `<li>` defines each item

### Tables

Tables structure data using:

- `<table>` container
- `<tr>` rows
- `<th>` headers
- `<td>` data cells

### Separation of Concerns

HTML defines structure only. Styling and behavior are handled separately using CSS and JavaScript.

## 🔧 Tech Stack

- HTML5