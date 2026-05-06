// for : fixed iteration

// initialization
// condition
// update

// print numbers from 50 - 1

// for (var i = 50; i > 0; i -= 1) {
//   console.log(i);
// }

// use the value as an index and access characters of string
var txt = "hello";

// for (var i = 0; i < txt.length; i += 1) {
//   console.log(txt[i]);
// }

// while : fixed iteration

// var i = 0;
// while (i < txt.length) {
//   console.log(txt[i]);
//   i += 1;
// }

// for (var i = 1; i <= 50; i += 1) {
//   if (i == 17) {
//     console.log("Over", 17);
//     break;
//   }

//   console.log(i);
// }

// for (var i = 1; i <= 50; i += 1) {
//   if (i == 17) {
//     continue;
//   }

//   console.log(i);
// }

// while loop non fixed iteration
// Concept:
// 1) We do NOT know in advance how many times loop will run.
// 2) Loop continues until user gives valid input.
// 3) Exit depends on data/state change, not fixed count like for(i=...).
// 4) Always keep an exit condition to avoid infinite loop.

// var email = prompt("Enter email : ");
// while (email.length < 8 || !email.endsWith(".com") || !email.includes("@")) {
//   email = prompt("Enter email : ");
// }

// console.log("Correct email :", email);

while (true) {
  // take input every iteration
  var email = prompt("Enter email : ");

  // validation condition:
  // - minimum length 8
  // - must contain "@"
  // - must end with ".com"
  if (email.length >= 8 && email.endsWith(".com") && email.includes("@")) {
    // success path -> stop loop
    console.log("Correct email :", email);
    break;
  }

  // fail path -> show message and continue looping
  alert("Incorrect email :" + email);
}

// do while loop
// for in
// for of

// ------------------------------------------------------------
// 20 Practice Tasks (while loop, non-fixed iteration only)
// Strict rule for all tasks:
// - use only while loop
// - no arrays
// - no objects
// - no functions
// ------------------------------------------------------------

// 1) Keep asking for username until length is at least 5.
// 2) Keep asking for password until it has at least 1 digit.
// 3) Keep asking for phone number until length is exactly 10.
// 4) Keep asking for age until user enters a number between 1 and 120.
// 5) Keep asking for OTP until user enters exactly "1234".
// 6) Keep asking for city until user input is not empty.
// 7) Keep asking for pincode until it is exactly 6 characters.
// 8) Keep asking for yes/no input until user enters only "yes" or "no".
// 9) Keep asking for amount until user enters a positive number (>0).
// 10) Keep asking for discount until value is between 0 and 100.
// 11) Keep asking for URL until it starts with "http".
// 12) Keep asking for file name until it ends with ".pdf".
// 13) Keep asking for grade until input is one of: A, B, C, D, E, F.
// 14) Keep asking for a word until it contains at least 1 vowel.
// 15) Keep asking for a number until it is divisible by both 2 and 3.
// 16) Keep asking for month number until it is between 1 and 12.
// 17) Keep asking for temperature until it is in range -50 to 60.
// 18) Keep asking for email until it has "@" and ends with ".org".
// 19) Keep asking for command until user enters "exit".
// 20) Keep asking for a secret code until length is 6 and includes "#".
