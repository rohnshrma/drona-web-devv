# JavaScript Deep Notes: Conditionals and Operators

Date: April 30, 2026

These notes deeply explain the concepts and code from `cfs.js` and `operators.js`, including lines that were originally commented in class.

## 1) Condition Flow Statements (`cfs.js`)

### 1.1 What is Control Flow?

Control flow means deciding which block of code runs next.
Condition statements allow JavaScript to choose one execution path based on a boolean result (`true` or `false`).

### 1.2 `if`, `else`, `else if` Concept

- `if`: runs block only when condition is true.
- `else`: runs when all above conditions are false.
- `else if`: checks another condition if previous one failed.

Syntax:

```js
if (condition) {
  // run if true
} else if (anotherCondition) {
  // run if above was false and this is true
} else {
  // run if all conditions are false
}
```

### 1.3 Uncommented Teaching Version of `cfs.js`

```js
// IF statement
// The code inside `if` runs only when condition is true.
if (true) {
  console.log("This runs because condition is true");
}

// Basic age check example
var age = parseInt(prompt("Enter your age: "));
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not eligible");
}

// if...else if...else chain example (day number to day name)
var today = parseInt(prompt("Enter the day today (0-6): "));

if (today === 0) console.log("Sunday");
else if (today === 1) console.log("Monday");
else if (today === 2) console.log("Tuesday");
else if (today === 3) console.log("Wednesday");
else if (today === 4) console.log("Thursday");
else if (today === 5) console.log("Friday");
else if (today === 6) console.log("Saturday");
else console.log("Invalid day");
```

### 1.4 Deep Explanation of Key Lines

#### `parseInt(prompt("..."))`

- `prompt()` returns input as string.
- `parseInt()` converts that string into an integer number.
- If conversion fails (e.g., input is `abc`), output becomes `NaN`.

#### `age >= 18`

- `>=` checks if left value is greater than or equal to right value.
- If condition true, first block runs.
- Otherwise `else` block runs.

#### `today === 0`

- `===` is strict equality.
- It compares both value and datatype.
- Better than `==` for predictable behavior.

### 1.5 Why `else if` Ordering Matters

Conditions are checked top to bottom.
First true condition wins, then rest are skipped.
So when ranges overlap, put more specific conditions first.

### 1.6 Better Validation Version (Production Habit)

```js
var dayInput = prompt("Enter day number (0-6): ");
var today = parseInt(dayInput);

if (Number.isNaN(today)) {
  console.log("Invalid input: enter a number");
} else if (today < 0 || today > 6) {
  console.log("Invalid day: use 0 to 6");
} else if (today === 0) {
  console.log("Sunday");
} else if (today === 1) {
  console.log("Monday");
} else if (today === 2) {
  console.log("Tuesday");
} else if (today === 3) {
  console.log("Wednesday");
} else if (today === 4) {
  console.log("Thursday");
} else if (today === 5) {
  console.log("Friday");
} else {
  console.log("Saturday");
}
```

## 2) Operators (`operators.js`)

### 2.1 Arithmetic Operators

```js
var x = 10;
var y = 2;

console.log(x + y);  // 12
console.log(x - y);  // 8
console.log(x * y);  // 20
console.log(x / y);  // 5
console.log(x % y);  // 0
console.log(x ** y); // 100
```

Meaning:

- `+` add
- `-` subtract
- `*` multiply
- `/` divide
- `%` remainder
- `**` power/exponent

### 2.2 Assignment Operators

```js
var z = 10;

z += 10; // z = z + 10
console.log(z); // 20

z -= 10; // z = z - 10
console.log(z); // 10

z *= 10; // z = z * 10
console.log(z); // 100

z /= 10; // z = z / 10
console.log(z); // 10

z %= 10; // z = z % 10
console.log(z); // 0

z **= 10; // z = z ** 10
console.log(z); // 0
```

Note:
Each operation updates the same variable, so result depends on previous line.

### 2.3 Comparison Operators

```js
console.log(12 > 10);     // true
console.log(12 >= 10);    // true
console.log(2 < 10);      // true
console.log(2 <= 10);     // true
console.log(20 == "20");  // true
console.log(20 === "20"); // false
console.log(20 != "20");  // false
console.log(20 !== "20"); // true
```

Deep rule:

- `==` and `!=` can convert datatypes automatically.
- `===` and `!==` do not convert datatype.
- Prefer strict operators in most real code.

### 2.4 Logical Operators

```js
console.log(12 > 10 && 10 < 12); // true
console.log(12 < 10 && 10 < 12); // false
console.log(12 < 10 && 10 > 12); // false

console.log(12 > 10 || 10 < 12); // true
console.log(12 < 10 || 10 < 12); // true
console.log(12 < 10 || 10 > 12); // false

console.log(!true);  // false
console.log(!false); // true
```

Meaning:

- `&&`: all conditions must be true.
- `||`: at least one condition must be true.
- `!`: reverses boolean.

### 2.5 Real-World Connection

- Login checks use `&&` (username and password both correct).
- Access checks use comparisons (`age >= 18`).
- Validation checks use `||` for invalid cases (`value < min || value > max`).

## 3) Short Dry Runs

### Example A

```js
var age = 17;
if (age >= 18) console.log("Eligible");
else console.log("Not Eligible");
```

- `17 >= 18` -> false
- `else` runs
- Output: `Not Eligible`

### Example B

```js
var today = 4;
if (today === 0) console.log("Sunday");
else if (today === 4) console.log("Thursday");
else console.log("Invalid");
```

- First condition false
- Second condition true
- Output: `Thursday`

## 4) Practice Tasks (20) - No Functions, Arrays, Loops, Objects

1. Take two numbers and print all arithmetic results.
2. Check if a number is even or odd using `%`.
3. Check if number is positive, negative, or zero.
4. Compare two numbers and print greater or equal.
5. Check if age is eligible to vote (`>=18`).
6. Grade calculator using slabs (`A/B/C/D/F`).
7. Check if number is divisible by 3.
8. Check if number is divisible by 5.
9. Check if number divisible by both 3 and 5.
10. Check if number divisible by 3 or 5.
11. Day number (0-6) to day name.
12. Month number (1-12) to quarter (`Q1-Q4`).
13. Salary bonus: if `<30000` add 20%, else add 10%.
14. Shopping discount by amount ranges.
15. Validate login with fixed username and password.
16. Check if input number is in range 10 to 50.
17. Use `==` and `===` on same values and print both results.
18. Check leap year using full condition.
19. Character check: uppercase/lowercase/digit/other.
20. Admission rule: age >= 18 and marks >= 60.

## 5) Mini Combined Practice

Take inputs:

- age
- day number (0-6)
- marks

Print:

- age eligibility
- day name
- pass/fail (`marks >= 35`)
- distinction (`marks >= 75`)

Use only:

- variables
- `if`, `else if`, `else`
- comparison and logical operators
- `console.log`

