# JavaScript Class 1 Notes: `if/else` and `switch`

Date: May 3, 2026

## 1) Quick Revision: `if`, `else if`, `else`

- `if`: runs only when condition is true.
- `else if`: extra condition checks when above condition is false.
- `else`: fallback when all above conditions are false.

```js
var age = parseInt(prompt("Enter your age: "));
if (age >= 18) console.log("Eligible");
else console.log("Not Eligible");
```

## 2) `switch` Statement Concept

`switch` is used when we want to compare one expression against many options.

Syntax:

```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // fallback code
}
```

### Important Rules

- `expression` is checked once.
- Matching is strict (like `===`).
- `break` stops execution.
- If `break` is missing, code falls into next case (fall-through).
- `default` runs when no case matches.

## 3) Switch Case 1: Day Number to Day Name

```js
var today = parseInt(prompt("Enter the day today (0-6): "));

switch (today) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}
```

Use this when one input has fixed known outputs.

## 4) Switch Case 2: Movie Ticketing (Grouped Cases)

Ticket rules:
- `0-4` -> Free
- `5-10` -> `₹100`
- `11-14` -> `₹200`
- `15+` -> `₹500`

```js
var age = parseInt(prompt("Enter your age: "));

switch (age) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Free");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("₹100");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
    console.log("₹200");
    break;
  default:
    console.log("₹500");
    break;
}
```

Here, multiple `case` labels share one output using fall-through.

## 5) Switch Case 3: Grade System with `switch(true)`

Grade rules:
- `91-100` -> `A`
- `81-90` -> `B`
- `71-80` -> `C`
- `61-70` -> `D`
- `0-60` -> `F`

```js
var marks = parseInt(prompt("Enter your marks: "));

switch (true) {
  case marks > 90 && marks <= 100:
    console.log("A");
    break;
  case marks > 80 && marks <= 90:
    console.log("B");
    break;
  case marks > 70 && marks <= 80:
    console.log("C");
    break;
  case marks > 60 && marks <= 70:
    console.log("D");
    break;
  case marks >= 0 && marks <= 60:
    console.log("F");
    break;
  default:
    console.log("Invalid Marks");
    break;
}
```

Why `switch(true)`?
- Normal switch checks exact value.
- Here each `case` is a condition (`true/false`).
- First condition that becomes `true` runs.

## 6) When to Choose What

- Use `if/else if` for mixed or complex logic.
- Use normal `switch(value)` for fixed exact choices.
- Use `switch(true)` for clean range-based slab logic.

## 7) 20 Practice Tasks (No Arrays, Objects, Functions, Loops)

1. Day number (`0-6`) to day name using switch.
2. Month number (`1-12`) to month name.
3. Day number to weekday/weekend.
4. Traffic light color to action.
5. Operator symbol (`+ - * / %`) mini calculator.
6. Vowel/consonant checker using switch.
7. ATM menu option to message.
8. Size code (`S/M/L`) to t-shirt price.
9. Grade from marks using `switch(true)`.
10. Temperature slab (`cold/mild/hot`) with `switch(true)`.
11. Shipping cost by weight slabs.
12. Electricity bill by unit slabs.
13. Age category (`child/teen/adult/senior`) using `switch(true)`.
14. Salary bonus by salary slabs.
15. Discount by cart amount slabs.
16. Print digit (`0-9`) in words.
17. Login role (`admin/user/guest`) message.
18. Movie rating code (`U/UA/A`) message.
19. Pass/fail/distinction from marks slabs.
20. Validate input range and print `Invalid` using `default`.
