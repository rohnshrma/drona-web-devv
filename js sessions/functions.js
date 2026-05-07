// =========================
// FUNCTIONS IN JAVASCRIPT
// =========================
// A function is a reusable block of code.
// Think of it like a "machine":
// - Input goes in (parameters)
// - Work happens inside
// - Output comes out (return value)
//
// Important rule:
// Code inside a function DOES NOT run automatically.
// It runs only when we call (invoke) that function.

// -------------------------------------------------
// 1) FUNCTION DECLARATION (classic way)
// -------------------------------------------------
// Syntax:
// function functionName(parameter1, parameter2) { ... }
//
// Here:
// - `addition` is the function name
// - `x` and `y` are parameters (placeholders for incoming values)
// - Inside we can do any logic
//
// function addition(x, y) {
//   // `console.log(...)` only prints value to console
//   // It does NOT send value back to caller.
//   console.log(x + y);
//
//   // `return` sends a value back to where function was called.
//   // return x + y;
// }
//
// Function call example:
// addition(23, 35);
// Here 23 -> x and 35 -> y.

// -------------------------------------------------
// 2) FUNCTION EXPRESSION
// -------------------------------------------------
// In JavaScript, functions are "first-class values".
// That means we can store a function inside a variable.
//
// This function has no internal name, so it is called an
// "anonymous function", and we assign it to `addition`.
var addition = function (x, y) {
  // Return gives the result to caller.
  return x + y;
};
//
// Usage:
// const result = addition(10, 5); // result = 15

// -------------------------------------------------
// 3) ARROW FUNCTION (ES6 modern syntax)
// -------------------------------------------------
// Arrow functions are shorter syntax for writing functions.
// Basic form:
// (param1, param2) => { return something; }
//
// Full version:
// var subtraction = (x, y) => {
//   return x - y;
// };
//
// Short version rule:
// If function body has only ONE line and directly returns a value,
// we can remove `{}` and `return`.
var subtraction = (x, y) => x - y;
//
// Usage:
// const answer = subtraction(20, 8); // answer = 12

// -------------------------------------------------
// QUICK BEGINNER SUMMARY
// -------------------------------------------------
// `console.log(value)` -> show value on screen/console.
// `return value`       -> send value back from function.
//
// declaration:
// function add(a, b) { return a + b; }
//
// expression:
// const add = function(a, b) { return a + b; };
//
// arrow:
// const add = (a, b) => a + b;
