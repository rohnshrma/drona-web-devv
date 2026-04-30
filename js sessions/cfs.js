// if

// the code inside of the if block runs only when the given condition is true

// syntax

// if (condition) {
// code to be executed
// }

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 18) console.log("Eligible");

// else : the code inside of else block runs only if all the given conditions above are false

// else if : a fallback condition where the code runs if the condition in else if block is true and above conditions are false

var today = parseInt(prompt("Enter the day today : "));
if (today === 0) console.log("Sunday");
else if (today === 1) console.log("Monday");
else if (today === 2) console.log("Tuesday");
else if (today === 3) console.log("Wednesday");
else if (today === 4) console.log("Thursday");
else if (today === 5) console.log("Friday");
else if (today === 6) console.log("Saturday");
else console.log("Invalid day");
