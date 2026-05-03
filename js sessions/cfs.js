// SWITCH STATEMENT - CLASS NOTES
// --------------------------------
// A switch checks one expression against multiple possible values (cases).
// It is useful when you want to handle many fixed options clearly.

// Basic syntax:
// switch (expression) {
//   case value1:
//     // code
//     break;
//   case value2:
//     // code
//     break;
//   default:
//     // fallback code
// }

// Key concepts:
// 1) switch(expression): expression is evaluated once.
// 2) case value: if expression === value, that case starts running.
// 3) break: stops execution so next cases do not run.
// 4) default: runs when no case matches.
// 5) Without break, execution continues to next case (fall-through).

// ------------------------------------------------------------
// CASE 1: Day number to day name (0-6)
// ------------------------------------------------------------

// Reads user input as text and converts it to integer.
var today = parseInt(prompt("Enter the day today (0-6): "));

// Switch compares the value of `today` with each case value.
switch (today) {
  // If today is 0, this block runs.
  case 0:
    console.log("Sunday");
    break; // stop here

  // If today is 1, this block runs.
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

  // If no case matches (like 7, -1, NaN), default runs.
  default:
    console.log("Invalid Day");
    break;
}

// ------------------------------------------------------------
// CASE 2: Movie ticketing system using fall-through
// ------------------------------------------------------------

// Rules:
// 0-4   -> Free
// 5-10  -> ₹100
// 11-14 -> ₹200
// 15+   -> ₹500

// Read age and convert string to number.
var age = parseInt(prompt("Enter your age: "));

// Switch checks exact values.
// Multiple cases share one output using fall-through.
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

  // Any other age (like 15, 20, 50) reaches default.
  default:
    console.log("₹500");
    break;
}

// ------------------------------------------------------------
// CASE 3: Grade calculator using switch(true)
// ------------------------------------------------------------

// Rules:
// 91-100 -> A
// 81-90  -> B
// 71-80  -> C
// 61-70  -> D
// 0-60   -> F

// Reads marks from user and converts to number.
var marks = parseInt(prompt("Enter your marks: "));

// Here expression is `true`.
// Each case is a condition that returns true/false.
// First case that becomes true will run.
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

  // Runs for invalid input (negative, >100, non-number).
  default:
    console.log("Invalid Marks");
    break;
}

// ------------------------------------------------------------
// 20 PRACTICE TASKS (No arrays, objects, functions, loops)
// ------------------------------------------------------------
// 1. Build a day-name converter using switch (0-6).
// 2. Build a month-name converter using switch (1-12).
// 3. Print weekday/weekend based on day number.
// 4. Traffic light input (red/yellow/green) with switch.
// 5. Simple calculator using operator symbol (+,-,*,/,%).
// 6. Check vowel/consonant using switch for lowercase letters.
// 7. ATM menu option (1 balance, 2 deposit, 3 withdraw).
// 8. Pizza size (S/M/L) and print price.
// 9. Movie rating code (U, UA, A) and print meaning.
// 10. Grade using switch(true) with custom ranges.
// 11. Temperature category: cold/mild/hot with switch(true).
// 12. Salary tax slab with switch(true).
// 13. Shipping charge by weight slabs using switch(true).
// 14. Electricity bill by unit slabs using switch(true).
// 15. Login role (admin/user/guest) and permissions message.
// 16. Device mode input (silent/vibrate/ring) output behavior.
// 17. Convert digit 0-9 to word using switch.
// 18. Check pass/fail and distinction using switch(true).
// 19. Age category: child/teen/adult/senior using switch(true).
// 20. Input validation: print invalid when value is out of allowed range.
