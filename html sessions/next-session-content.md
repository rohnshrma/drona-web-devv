# Next Session Content

This file is for the next class session.

The goal is to explain these topics deeply, but in a beginner-friendly way:

- `display: inline`
- `display: block`
- `display: inline-block`
- `mailto` in forms
- `name` attribute in forms
- Inline CSS
- Internal CSS
- External CSS

---

## 1. Inline vs Block vs Inline-Block

In HTML and CSS, elements do not behave the same way.

Some elements:

- take only as much width as needed
- stay in the same line

Some elements:

- take full width
- start from a new line

That behavior is controlled by `display`.

The 3 beginner-important values are:

- `inline`
- `block`
- `inline-block`

---

## 2. What is `display: inline`?

An inline element:

- stays in the same line
- takes only the width its content needs
- does not normally respect `width` and `height`

Common inline elements:

- `<span>`
- `<a>`
- `<strong>`
- `<em>`

### Example

```html
<p>
  My name is <span style="background-color: yellow;">Rohan</span> and I teach HTML.
</p>
```

### What happens?

- `<span>` stays inside the paragraph line
- it does not jump to the next line
- it uses only the space needed by the word `Rohan`

### Another example

```html
<span style="background-color: lightblue;">One</span>
<span style="background-color: lightgreen;">Two</span>
<span style="background-color: pink;">Three</span>
```

Output behavior:

- all 3 boxes appear in the same line

### Important beginner note

If you give an inline element:

```css
width: 200px;
height: 100px;
```

it usually will not behave the way a beginner expects.

That is why inline elements are mostly used for:

- small text styling
- links
- highlighting words inside text

---

## 3. What is `display: block`?

A block element:

- starts on a new line
- takes full available width by default
- respects `width` and `height`

Common block elements:

- `<div>`
- `<p>`
- `<h1>` to `<h6>`
- `<form>`

### Example

```html
<div style="background-color: lightcoral;">First div</div>
<div style="background-color: lightseagreen;">Second div</div>
<div style="background-color: lightsalmon;">Third div</div>
```

### What happens?

- each `<div>` starts on a new line
- each one takes full width by default

### Example with width

```html
<div
  style="
    display: block;
    width: 200px;
    height: 80px;
    background-color: orange;
  "
>
  Block Box
</div>
```

### What happens?

- now the block element has a custom width
- but it still starts on a new line

---

## 4. What is `display: inline-block`?

`inline-block` is like a mix of both.

An inline-block element:

- stays in the same line like `inline`
- but also accepts `width` and `height` like `block`

This is very useful when you want:

- boxes side by side
- fixed width items in one row
- buttons/cards next to each other

### Example

```html
<div
  style="
    display: inline-block;
    width: 120px;
    height: 80px;
    background-color: skyblue;
  "
>
  Box 1
</div>

<div
  style="
    display: inline-block;
    width: 120px;
    height: 80px;
    background-color: lightgreen;
  "
>
  Box 2
</div>

<div
  style="
    display: inline-block;
    width: 120px;
    height: 80px;
    background-color: peachpuff;
  "
>
  Box 3
</div>
```

### What happens?

- all boxes can come in the same line
- each box can have proper width and height

---

## 5. Quick Difference Table

| Property | `inline` | `block` | `inline-block` |
| --- | --- | --- | --- |
| Starts from new line | No | Yes | No |
| Takes full width by default | No | Yes | No |
| Respects width and height | Usually no | Yes | Yes |
| Best used for | text, links | sections, layout | side-by-side boxes |

---

## 6. Easy Demo for Class

Use this full example in class:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display Demo</title>
  </head>
  <body>
    <h1>Display Property Demo</h1>

    <h2>Inline</h2>
    <span style="background-color: yellow;">HTML</span>
    <span style="background-color: lightblue;">CSS</span>
    <span style="background-color: lightgreen;">JS</span>

    <h2>Block</h2>
    <div style="background-color: pink;">Box 1</div>
    <div style="background-color: orange;">Box 2</div>
    <div style="background-color: lightgray;">Box 3</div>

    <h2>Inline-Block</h2>
    <div
      style="
        display: inline-block;
        width: 100px;
        height: 60px;
        background-color: skyblue;
      "
    >
      Box 1
    </div>
    <div
      style="
        display: inline-block;
        width: 100px;
        height: 60px;
        background-color: lightgreen;
      "
    >
      Box 2
    </div>
    <div
      style="
        display: inline-block;
        width: 100px;
        height: 60px;
        background-color: peachpuff;
      "
    >
      Box 3
    </div>
  </body>
</html>
```

---

## 7. What is `name` in Forms?

Beginners often understand `id`, but get confused about `name`.

### Very simple rule

- `id` helps connect label and element, and is also used by CSS/JS
- `name` sends data when the form is submitted

### Example

```html
<form>
  <label for="username">Name:</label>
  <input type="text" id="username" name="username" />
</form>
```

### What each part does

- `id="username"` connects with `<label for="username">`
- `name="username"` decides the key sent in form data

If the user types:

```text
Rohan
```

then submitted data looks like:

```text
username=Rohan
```

### Important point

If an input has no `name`, its value is usually **not sent** with form submission.

That is why `name` is very important.

### Example with multiple fields

```html
<form>
  <label for="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullname" />

  <br /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <br /><br />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" />

  <br /><br />

  <button type="submit">Submit</button>
</form>
```

Possible submitted data:

```text
fullname=Rohan Sharma
email=rohan@gmail.com
age=28
```

---

## 8. `name` in Radio Buttons

For radio buttons, the `name` is extra important.

All radio buttons that belong to the same group must have the same `name`.

### Correct example

```html
<p>Gender:</p>

<input type="radio" id="male" name="gender" value="Male" />
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="Female" />
<label for="female">Female</label>

<input type="radio" id="other" name="gender" value="Other" />
<label for="other">Other</label>
```

### Why same `name`?

Because all 3 belong to one group:

- only one option can be selected

Submitted data:

```text
gender=Female
```

---

## 9. `name` in Checkbox

Checkboxes are different from radio buttons.

Multiple checkboxes can be selected.

### Example

```html
<p>Hobbies:</p>

<input type="checkbox" id="reading" name="hobby" value="Reading" />
<label for="reading">Reading</label>

<input type="checkbox" id="music" name="hobby" value="Music" />
<label for="music">Music</label>

<input type="checkbox" id="sports" name="hobby" value="Sports" />
<label for="sports">Sports</label>
```

Possible submitted data:

```text
hobby=Reading
hobby=Music
```

---

## 10. What is `mailto`?

`mailto` is used to open the user’s email app with a ready-made email action.

Example:

```html
<a href="mailto:hello@example.com">Send Email</a>
```

When the user clicks:

- mail app opens
- receiver email is filled

---

## 11. `mailto` with Subject and Body

```html
<a href="mailto:hello@example.com?subject=Admission Inquiry&body=Hello Sir">
  Email Us
</a>
```

### What happens?

- `hello@example.com` is receiver email
- `subject=Admission Inquiry` fills the subject
- `body=Hello Sir` fills the message body

---

## 12. Can `mailto` be Used in a Form?

Yes.

A form can use `mailto` in the `action` attribute.

### Example

```html
<form action="mailto:hello@example.com" method="post" enctype="text/plain">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />

  <br /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />

  <br /><br />

  <button type="submit">Send</button>
</form>
```

### What happens?

- when user submits form
- browser tries to open default email app
- form data is prepared in email format

### Important beginner warning

`mailto` forms are good for learning, but not ideal for real projects.

Why?

- it depends on user having a mail app configured
- it may behave differently on different devices
- it is not reliable like backend form handling

### Best way to explain to beginners

Say this:

> `mailto` form is okay for practice, but real websites usually send form data to a server.

---

## 13. Full `mailto` Form Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mailto Form</title>
  </head>
  <body>
    <h1>Contact Form</h1>

    <form action="mailto:hello@example.com" method="post" enctype="text/plain">
      <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" />

      <br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />

      <br /><br />

      <label for="message">Message:</label>
      <textarea id="message" name="message"></textarea>

      <br /><br />

      <button type="submit">Send Email</button>
    </form>
  </body>
</html>
```

---

## 14. Inline CSS

Inline CSS means writing CSS directly inside an HTML tag using the `style` attribute.

### Example

```html
<h1 style="color: red;">Hello World</h1>
```

### Meaning

- CSS is written inside the tag itself
- only that element gets the style

### Good for

- quick testing
- beginner practice
- very small changes

### Not good for

- large websites
- repeated styling
- clean project structure

---

## 15. Internal CSS

Internal CSS means writing CSS inside the same HTML file using the `<style>` tag in `<head>`.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Internal CSS</title>
    <style>
      h1 {
        color: blue;
      }

      p {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is internal CSS.</p>
  </body>
</html>
```

### Good for

- single-page practice
- quick demos
- beginner learning

### Limitation

- CSS stays only in one file
- if you have 5 pages, you may need to repeat the same CSS

---

## 16. External CSS

External CSS means writing CSS in a separate `.css` file and linking it to HTML.

This is the most common and best approach in real projects.

### HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>External CSS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is external CSS.</p>
  </body>
</html>
```

### CSS file

```css
h1 {
  color: green;
}

p {
  background-color: lightgray;
}
```

### Good for

- multiple pages
- clean code
- reusable styling
- real projects

---

## 17. Inline vs Internal vs External CSS

| Type | Where CSS is written | Best for | Reusability |
| --- | --- | --- | --- |
| Inline | inside HTML tag | quick small test | Very low |
| Internal | inside `<style>` in same HTML file | one page demo | Medium |
| External | separate `.css` file | real projects | High |

---

## 18. Very Important Beginner Comparison

### Inline CSS

```html
<p style="color: red;">Hello</p>
```

### Internal CSS

```html
<style>
  p {
    color: red;
  }
</style>
```

### External CSS

```html
<link rel="stylesheet" href="style.css" />
```

```css
p {
  color: red;
}
```

---

## 19. Best Way to Teach This in Class

Teaching order:

1. Start with inline CSS because beginners can see it instantly.
2. Move to internal CSS to show cleaner structure.
3. Then teach external CSS as the professional and reusable way.

For forms:

1. Teach `id` first.
2. Then explain `for` in label.
3. Then explain `name` as the data-sending part.
4. Then show a small `mailto` form.

For display:

1. Show inline with `<span>`
2. Show block with `<div>`
3. Show inline-block with boxes side by side

---

## 20. One-Line Revision Notes

- `inline` = same line, content width only
- `block` = new line, full width by default
- `inline-block` = same line + width/height allowed
- `id` = identify the element
- `name` = sends form data
- `mailto` = opens email app
- inline CSS = inside tag
- internal CSS = inside `<style>`
- external CSS = separate CSS file

---

## 21. Practice Questions for Students

1. What is the difference between `id` and `name`?
2. Why do radio buttons use the same `name`?
3. Why is external CSS better for bigger projects?
4. What is the difference between `inline` and `block`?
5. Why is `inline-block` useful?
6. Why is `mailto` okay for learning but not ideal for real websites?

---

## 22. Homework Practice

Ask students to create:

1. A page showing `inline`, `block`, and `inline-block`
2. A form using `name` on every input
3. A small `mailto` contact form
4. One example each of inline, internal, and external CSS

---

## 23. Final Beginner Summary

If a student remembers only this, that is still a good start:

- `<span>` is usually inline
- `<div>` is usually block
- `inline-block` helps place boxes side by side
- `name` is necessary for sending form data
- `mailto` opens the email app
- external CSS is the cleanest and most reusable method
