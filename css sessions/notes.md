# CSS Notes for Beginners

This file explains:

- Inline CSS
- Internal CSS
- External CSS
- CSS precedence (which style wins)

These notes are based on the code inside [index.html](/Users/rohan/Desktop/Rohan Desktop/Classes/drona web devv/css sessions/index.html) and [style.css](/Users/rohan/Desktop/Rohan Desktop/Classes/drona web devv/css sessions/style.css).

---

## 1. The Three Ways to Add CSS

CSS can be added to HTML in 3 common ways:

1. Inline CSS
2. Internal CSS
3. External CSS

All three are valid, but they are used for different situations.

---

## 2. Inline CSS

Inline CSS is written directly inside an HTML element using the `style` attribute.

Example from your code:

```html
<h1 style="background-color: red; color: green">CSS SESSIONS</h1>
```

### What this means

- `style=""` is added directly on the `<h1>`
- `background-color: red;` makes the background red
- `color: green;` makes the text green

### Why beginners should understand it

Inline CSS is the easiest to see because the style is written on the same line as the element.

### Advantages

- Very easy for small quick changes
- Good for testing one property quickly
- You can immediately see which element is being styled

### Disadvantages

- Makes HTML messy if overused
- Hard to manage when a page grows
- Cannot be reused easily
- Usually not the best choice for large projects

### Best use

- Small experiments
- Quick testing
- Temporary styling

---

## 3. Internal CSS

Internal CSS is written inside the HTML file using the `<style>` tag, usually inside the `<head>`.

Example from your code:

```html
<style>
  ul {
    background: tan;
    color: red;
  }

  h1 {
    background-color: pink;
  }
</style>
```

### What this means

This styles elements inside the same HTML page:

- `ul { background: tan; }` gives the `<ul>` a tan background
- `ul { color: red; }` makes the text inside the list red
- `h1 { background-color: pink; }` gives the `<h1>` a pink background

### How it works

Internal CSS uses selectors like:

- `h1`
- `ul`

These selectors target HTML tags on the page.

### Advantages

- Better organized than inline CSS
- Good for single-page practice
- Easy for learning and small demos

### Disadvantages

- Only works for that one HTML file
- Not reusable across multiple pages
- Becomes harder to manage in larger websites

### Best use

- Practice files
- Small projects
- One-page HTML pages

---

## 4. External CSS

External CSS is written in a separate `.css` file and connected to HTML using the `<link>` tag.

Example from your code:

In `index.html`:

```html
<link rel="stylesheet" href="style.css" />
```

In `style.css`:

```css
h1 {
  background: black;
}
```

### What this means

- The browser opens `style.css`
- It reads the CSS inside that file
- It applies those styles to matching elements in `index.html`

In your case:

- `h1 { background: black; }` tries to make the `<h1>` background black

### Advantages

- Best for real projects
- Keeps HTML clean
- Reusable across many HTML pages
- Easier to maintain and update

### Disadvantages

- Slightly harder for absolute beginners at first
- Requires linking the file correctly

### Best use

- Real websites
- Multi-page projects
- Clean and professional structure

---

## 5. Difference Between Inline, Internal, and External

### Inline CSS

- Written inside the element
- Targets only one element
- Highest priority in normal cases

### Internal CSS

- Written inside `<style>`
- Works only for that HTML page
- Good for practice and small files

### External CSS

- Written in a separate `.css` file
- Best for large and real projects
- Easy to reuse

---

## 6. CSS Precedence

You asked about "presidence", and in CSS the correct word is usually **precedence**.

CSS precedence means:

**When more than one style tries to change the same thing, which one wins?**

This is one of the most important beginner topics.

---

## 7. Precedence in Your Current Code

Your `<h1>` is being styled in 3 places:

### Inline CSS

```html
<h1 style="background-color: red; color: green">CSS SESSIONS</h1>
```

### Internal CSS

```html
<style>
  h1 {
    background-color: pink;
  }
</style>
```

### External CSS

```css
h1 {
  background: black;
}
```

So all three are trying to style the same `<h1>`.

---

## 8. Which Style Wins?

For your `h1`, the normal order of precedence is:

1. Inline CSS
2. Internal CSS
3. External CSS

So:

- Inline says `background-color: red`
- Internal says `background-color: pink`
- External says `background: black`

The final winner for the background is:

**red**

because inline CSS has higher precedence than internal and external CSS.

The text color becomes:

**green**

because only the inline CSS sets the `color` for `h1`.

---

## 9. Why the `<h1>` Background Becomes Red

Let us think step by step:

1. Browser reads external CSS
2. Browser reads internal CSS
3. Browser reads inline CSS on the element
4. When there is a conflict, higher precedence wins

Since inline CSS directly styles the `<h1>`, it overrides the internal and external background color.

That is why:

- `background: black` from external CSS does not win
- `background-color: pink` from internal CSS does not win
- `background-color: red` from inline CSS wins

---

## 10. What Happens to the `<ul>`

Your `<ul>` is styled only in internal CSS:

```html
<style>
  ul {
    background: tan;
    color: red;
  }
</style>
```

There is no inline CSS on the `<ul>` and no external CSS for `ul` in `style.css`.

So the `<ul>` gets:

- tan background
- red text

This is because there is no competing rule.

---

## 11. Simple Rule to Remember

For beginners, remember this order first:

**Inline > Internal > External**

This is a very useful beginner shortcut.

But later you will also learn about:

- Specificity
- `!important`
- Source order

These can affect which rule wins too.

---

## 12. Important Beginner Note

The full CSS system is actually a little more detailed than just:

`Inline > Internal > External`

In real CSS, the browser also checks:

- importance
- specificity
- order of rules

But at your current level, your example is best understood like this:

**Inline CSS wins over internal CSS, and internal CSS wins over external CSS when they conflict in this example.**

That is exactly what your current `h1` demonstrates.

---

## 13. Specificity in Easy Words

Specificity means:

**How specific a selector is.**

Examples:

- `h1` is less specific
- `.title` is more specific
- `#mainTitle` is even more specific
- inline style is usually stronger than all of these normal selectors

In your files, both internal and external use the same selector:

```css
h1
```

Since both target `h1`, and inline CSS is stronger, inline wins.

---

## 14. If Inline CSS Was Removed

If you changed this:

```html
<h1 style="background-color: red; color: green">CSS SESSIONS</h1>
```

to this:

```html
<h1>CSS SESSIONS</h1>
```

then the competition would be only between:

- internal CSS: `background-color: pink`
- external CSS: `background: black`

In beginner learning, you can say the internal CSS would win here in your file setup, so the background would become pink.

So the result would be something like:

- background: pink
- text color: browser default color, unless another rule sets it

---

## 15. When Should You Use Each One?

### Use inline CSS when:

- you are testing quickly
- you want to style one element fast
- you are learning basic syntax

### Use internal CSS when:

- you are building a small practice page
- you want all CSS in one file
- you are doing simple demos

### Use external CSS when:

- you are building real websites
- you want clean code
- you want reusable styles
- you have multiple pages

---

## 16. Best Practice for Real Projects

In real projects:

- avoid too much inline CSS
- use external CSS most of the time
- use internal CSS only when needed for small pages or special cases

Why?

Because external CSS is:

- cleaner
- easier to manage
- easier to reuse
- more professional

---

## 17. Final Understanding from Your Code

From your current files:

- Inline CSS is on the `<h1>`
- Internal CSS is inside the `<style>` tag in `index.html`
- External CSS is in `style.css`

And the final visible result for the `<h1>` is:

- background becomes red
- text becomes green

And the final visible result for the `<ul>` is:

- background becomes tan
- text becomes red

---

## 18. Short Revision

### Inline CSS

- written inside an element
- strongest in your example

### Internal CSS

- written in `<style>`
- applies to the current page

### External CSS

- written in another file like `style.css`
- best for real projects

### Precedence

- decides which style wins
- in your example: inline wins for the `h1`

---

## 19. One-Line Memory Trick

**Inline is closest to the element, so it usually wins.**

---

## 20. CSS Properties for Text Styling

Text styling properties change how text looks on the page.

You are already using one text property in your code:

```css
color: red;
```

and:

```html
<h1 style="color: green">
```

The `color` property changes the color of the text.

---

## 21. Common Text Styling Properties

### 1. `color`

This changes the text color.

Example:

```css
h1 {
  color: blue;
}
```

Usage snippet:

```css
p {
  color: red;
}
```

Meaning:

- all `<p>` text becomes red

---

### 2. `font-size`

This changes the size of the text.

Example:

```css
h1 {
  font-size: 40px;
}
```

Usage snippet:

```css
p {
  font-size: 18px;
}
```

Meaning:

- paragraph text becomes 18 pixels in size

Common units:

- `px` for fixed size
- `%` for relative size
- `em` and `rem` for scalable size

For beginners, `px` is easiest to start with.

---

### 3. `font-family`

This changes the type of writing style, also called the font.

Example:

```css
h1 {
  font-family: Arial, sans-serif;
}
```

Usage snippet:

```css
body {
  font-family: Verdana, sans-serif;
}
```

Meaning:

- the page text uses Verdana if available
- if not, the browser uses another sans-serif font

---

### 4. `font-weight`

This changes how bold the text looks.

Example:

```css
h1 {
  font-weight: bold;
}
```

Usage snippet:

```css
p {
  font-weight: 700;
}
```

Meaning:

- the paragraph text becomes bold

Common values:

- `normal`
- `bold`
- `100` to `900`

Usually:

- `400` means normal
- `700` means bold

---

### 5. `font-style`

This changes whether text is normal or italic.

Example:

```css
p {
  font-style: italic;
}
```

Usage snippet:

```css
span {
  font-style: normal;
}
```

Meaning:

- `italic` slants the text
- `normal` keeps it regular

---

### 6. `text-align`

This changes horizontal alignment of text.

Example:

```css
h1 {
  text-align: center;
}
```

Usage snippet:

```css
p {
  text-align: right;
}
```

Meaning:

- heading can be centered
- paragraph can move to the right side

Common values:

- `left`
- `center`
- `right`

---

### 7. `text-decoration`

This adds or removes line decorations on text.

Example:

```css
a {
  text-decoration: none;
}
```

Usage snippet:

```css
h2 {
  text-decoration: underline;
}
```

Meaning:

- `none` removes the underline from links
- `underline` adds a line under text

---

### 8. `text-transform`

This changes the case of the letters.

Example:

```css
h1 {
  text-transform: uppercase;
}
```

Usage snippet:

```css
p {
  text-transform: capitalize;
}
```

Meaning:

- `uppercase` makes all letters capital
- `capitalize` makes first letters capital

Common values:

- `uppercase`
- `lowercase`
- `capitalize`

---

### 9. `line-height`

This controls the vertical space between lines of text.

Example:

```css
p {
  line-height: 1.6;
}
```

Usage snippet:

```css
div {
  line-height: 30px;
}
```

Meaning:

- more line height makes text easier to read

This is very useful for paragraphs.

---

### 10. `letter-spacing`

This controls the space between letters.

Example:

```css
h1 {
  letter-spacing: 2px;
}
```

Usage snippet:

```css
p {
  letter-spacing: 1px;
}
```

Meaning:

- letters get more space between them

---

## 22. Quick Text Styling Example

```css
h1 {
  color: white;
  background-color: black;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}
```

What this does:

- makes the text white
- gives a black background
- increases text size
- centers the heading
- changes letters to uppercase
- adds spacing between letters

---

## 23. CSS Properties for Background Styling

Background properties change the area behind the text or behind an element.

In your code, you already use:

```css
background: tan;
background-color: pink;
background: black;
background-color: red;
```

These are background styling properties.

---

## 24. Common Background Properties

### 1. `background-color`

This changes the background color of an element.

Example from your code:

```css
h1 {
  background-color: pink;
}
```

Usage snippet:

```css
div {
  background-color: yellow;
}
```

Meaning:

- the `<div>` gets a yellow background

---

### 2. `background`

This is a shorthand property.

It can set many background things in one line, but beginners often use it just for color.

Example from your code:

```css
ul {
  background: tan;
}
```

Usage snippet:

```css
section {
  background: lightblue;
}
```

Meaning:

- the `<section>` gets a light blue background

Beginner note:

- `background` is short and convenient
- `background-color` is more specific and easier to understand clearly

---

### 3. `background-image`

This adds an image behind the element.

Example:

```css
body {
  background-image: url("bg.jpg");
}
```

Usage snippet:

```css
div {
  background-image: url("photo.png");
}
```

Meaning:

- the image appears behind the content of the element

---

### 4. `background-repeat`

This controls whether a background image repeats.

Example:

```css
body {
  background-repeat: no-repeat;
}
```

Usage snippet:

```css
div {
  background-repeat: repeat-x;
}
```

Meaning:

- `no-repeat` shows the image one time
- `repeat-x` repeats only left to right

Common values:

- `repeat`
- `no-repeat`
- `repeat-x`
- `repeat-y`

---

### 5. `background-position`

This controls where the background image is placed.

Example:

```css
body {
  background-position: center;
}
```

Usage snippet:

```css
div {
  background-position: top right;
}
```

Meaning:

- image can be centered
- image can be moved to top right

---

### 6. `background-size`

This controls the size of the background image.

Example:

```css
body {
  background-size: cover;
}
```

Usage snippet:

```css
div {
  background-size: contain;
}
```

Meaning:

- `cover` fills the whole area
- `contain` fits the full image inside the area

---

## 25. Quick Background Example

```css
body {
  background-color: lightgray;
}

h1 {
  background-color: navy;
  color: white;
}
```

What this does:

- page background becomes light gray
- `h1` background becomes navy
- `h1` text becomes white

---

## 26. Text Styling and Background Styling Together

Very often, text and background properties are used together.

Example:

```css
h1 {
  color: white;
  background-color: red;
  font-size: 32px;
  text-align: center;
}
```

Meaning:

- text color becomes white
- background becomes red
- text becomes larger
- text moves to center

This is similar to what you already have in your inline CSS.

---

## 27. Relating This to Your Current `index.html`

Your current inline CSS:

```html
<h1 style="background-color: red; color: green">CSS SESSIONS</h1>
```

This uses:

- `background-color` for background styling
- `color` for text styling

Your internal CSS:

```css
ul {
  background: tan;
  color: red;
}
```

This also uses:

- `background` for background styling
- `color` for text styling

So your current file is already a good beginner example of both text and background properties.

---

## 28. Practice Snippets You Can Try

### Practice 1

```css
h1 {
  color: white;
  background-color: blue;
}
```

### Practice 2

```css
ul {
  color: black;
  background-color: lightgreen;
  font-size: 20px;
}
```

### Practice 3

```css
body {
  background-color: beige;
  font-family: Arial, sans-serif;
}
```

### Practice 4

```css
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}
```

---

## 29. Final Memory Tips

- `color` changes text color
- `background-color` changes background color
- `background` is a shortcut background property
- `font-size` changes text size
- `text-align` moves text left, center, or right
- `font-weight` makes text normal or bold
- `text-transform` changes letter case

---

## 30. One Easy Formula

If you want to style text and background, beginners usually start with:

```css
selector {
  color: white;
  background-color: black;
  font-size: 20px;
  text-align: center;
}
```

This is a simple and powerful starting pattern for practice.
