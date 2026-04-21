# Class 1 - JavaScript Basics

Date: 21 April 2026

These notes cover everything taught in class today, including commented topics from `script.js` and JS placement from `index.html`.

## 1) JavaScript Input and Output Basics

### Output methods

1. `console.log()`
- Used to print output in browser console.
- Best for developers while debugging.
- Example:
```js
console.log("hello world");
```

2. `alert()` or `window.alert()`
- Shows popup message in browser.
- `alert()` and `window.alert()` are effectively same.
- Example:
```js
alert("hello alert");
window.alert("hello alert");
```

### Input method

3. `prompt()`
- Takes input from user using popup.
- Can have default value.
- Example:
```js
prompt("Enter your name", "john doe");
```

## 2) Variables

### What is a variable?
A variable is a named container to store data.

### Variable creation steps

1. Declaration: variable name is created.
2. Initialization: value is assigned.

Example:
```js
var age; // declaration
age = 34; // initialization
```

Or both together:
```js
var age = 34;
```

## 3) `var`, `let`, `const`

These 3 keywords are used to create variables.

### A) `var`
- Can be redeclared.
- Can be reassigned.

Example:
```js
var x = 34; // declaration
x = 45; // reassignment allowed
var x = 56; // redeclaration allowed
```

### B) `let`
- Cannot be redeclared in same scope.
- Can be reassigned.

Example:
```js
let y = 23;
y = 56; // allowed
// let y = 99; // not allowed in same scope
```

### C) `const`
- Must be initialized at the time of declaration.
- Cannot be reassigned.

Examples:
```js
const pi = 3.14;
// pi = 100; // error: Assignment to constant variable

// const myname; // error: Missing initializer in const declaration
```

## 4) Important terms from class code

In this line:
```js
var age = 34;
```

- `var` -> keyword
- `age` -> variable name
- `=` -> assignment operator
- `34` -> value
- `;` -> end of statement (EOS)

## 5) Where to put JavaScript in HTML (and where not)

From your `index.html`, two approaches were shown:

### 1. External JavaScript (recommended)
```html
<script src="script.js"></script>
```

Best place (usually): just before closing `</body>` so HTML loads first and then JS runs.

### 2. Internal JavaScript
```html
<script>
  // JS code here
</script>
```

This can also be placed before `</body>`.

### Where not to place JS (for beginners)
- Avoid writing heavy JS in `<head>` without `defer`/`async`, because it can block page rendering.
- Avoid mixing large JS blocks directly in HTML when project grows; prefer external file.
- Avoid inline JS in attributes like `onclick="..."` for clean code practice.

## 6) Internal JS example discussed (commented in HTML)

```js
document.querySelector("#main").addEventListener("mouseover", () => {
  document.querySelector("#main").innerText = "Abe ja Good Night";
});
```

Meaning:
- Select element with id `main`
- Listen for `mouseover`
- Change heading text when mouse comes over it

## 7) Errors intentionally shown in class

Your script includes two lines that will stop execution with error:

1. `pi = 100;`
- Error because `pi` is `const`.

2. `let y = 56;` after `let y = 23;` in same scope
- Error because `let` redeclaration is not allowed.

Tip: Keep these lines commented while practicing other code.

## 8) Quick revision

1. Input: `prompt()`
2. Output: `console.log()`, `alert()`
3. Variables: `var`, `let`, `const`
4. `var`: redeclare + reassign
5. `let`: reassign only
6. `const`: initialize compulsory, no reassignment
7. Preferred JS placement: external file at end of body
