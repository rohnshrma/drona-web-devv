/*
CALLBACKS IN JAVASCRIPT - DEEP NOTES

Core idea:
- A callback is a function passed as an argument to another function.
- The receiving function decides when to execute that callback.
- This gives us flexibility: same outer function, different behaviors.

Real-life analogy:
- You place a food order and leave your phone number.
- Your phone number is like a callback reference.
- Restaurant (outer function) calls you back when food is ready.
*/

// -------------------------------------------------
// 1) A normal function that RETURNS data
// -------------------------------------------------
// This function asks year of birth and returns computed age.
// Important: `return` sends data back to caller.
var ageCalc = function () {
  // parseInt converts text input into number.
  // Base 10 is passed for safer numeric parsing.
  var yob = parseInt(prompt("Enter your year of birth:"), 10);

  // Validate input: if user enters invalid data, return NaN.
  // isNaN(NaN) is true.
  if (isNaN(yob)) {
    return NaN;
  }

  // Current year comes from Date API.
  var currentYear = new Date().getFullYear();
  return currentYear - yob;
};

// -------------------------------------------------
// 2) Function that ACCEPTS a callback
// -------------------------------------------------
// Parameters:
// - averageAge: numeric target lifespan for comparison
// - cb: callback function (expected to return current age)
const lifeSpan = (averageAge, cb) => {
  // Invoke callback exactly where we need age.
  // This is the "callback execution point".
  var age = cb();

  // Defensive check: if callback returns invalid number,
  // we stop further calculation and inform the user.
  if (isNaN(age)) {
    console.log("Invalid input. Please enter a valid birth year.");
    return;
  }

  var yearsLeft = averageAge - age;

  // Basic branch handling for clearer real-world output.
  if (yearsLeft > 0) {
    console.log(`Your age is ${age}. Years left (approx): ${yearsLeft}`);
  } else if (yearsLeft === 0) {
    console.log(`Your age is ${age}. You are exactly at average age.`);
  } else {
    console.log(
      `Your age is ${age}. You are ${Math.abs(yearsLeft)} years beyond average age.`
    );
  }
};

// -------------------------------------------------
// 3) Callback in action
// -------------------------------------------------
// Here we are PASSING function reference `ageCalc` (not calling it here).
// Wrong: lifeSpan(90, ageCalc()) -> this calls immediately and passes value.
// Right: lifeSpan(90, ageCalc)   -> pass function itself, call inside lifeSpan.
lifeSpan(90, ageCalc);

// -------------------------------------------------
// 4) Another callback example (math operation injection)
// -------------------------------------------------
// This pattern is common: parent function controls flow,
// callback controls "how to process values".
function calculate(x, y, operation) {
  return operation(x, y);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log("Add using callback:", calculate(10, 5, add));
console.log("Multiply using callback:", calculate(10, 5, multiply));
console.log(
  "Subtract using inline callback:",
  calculate(10, 5, function (a, b) {
    return a - b;
  })
);

/*
============================================================
PRACTICE TASKS (CALLBACK CONCEPT) - 10 QUESTIONS
============================================================
1) Create `greetUser(name, cb)`:
   - Print "Hi, <name>".
   - Then call callback to print an extra message.

2) Create `getNumberAndProcess(cb)`:
   - Ask user a number with prompt.
   - Callback should return square of number.

3) Create `calculator(a, b, cb)`:
   - Pass different callbacks: add, subtract, divide.

4) Create `isEligible(age, cb)`:
   - If age >= 18, call callback that prints "Eligible".
   - Else print "Not eligible".

5) Create `formatText(text, cb)`:
   - Use one callback for uppercase.
   - Another callback for lowercase.

6) Create `runTwice(cb)`:
   - Call same callback two times.
   - Observe repeated behavior.

7) Create `filterNumbers(arr, cb)`:
   - Callback decides which numbers to keep.
   - Test with even and odd conditions.

8) Create `withValidation(value, cb)`:
   - If value is empty, print error.
   - Else pass value to callback.

9) Create `simulateDownload(cb)`:
   - Print "Downloading...".
   - After 2 seconds, call callback and print "Completed".
   - (Use setTimeout)

10) Create `customMap(arr, cb)`:
   - Build your own mini version of map using loop + callback.
   - Return transformed array.
*/
