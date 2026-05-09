/*
ARRAYS IN JAVASCRIPT - DEEP NOTES

Why arrays?
- Arrays help us store many values inside one variable.
- Each value is stored at an index (position).
- Index starts from 0, not 1.

Important properties:
- Ordered: position matters.
- Mutable: values can be changed after creation.
- Can store duplicates.
- Can store mixed data types (not recommended for clean design, but possible).
*/

// 1) Creating an array
var nums = [34, 45, 23, 45, 2, 3];
console.log("Initial array:", nums);
console.log("Length (number of elements):", nums.length);

/*
Index understanding:
nums[0] -> first element
nums[nums.length - 1] -> last element
*/
console.log("First element:", nums[0]);
console.log("Last element:", nums[nums.length - 1]);

// 2) Updating value at specific index (arrays are mutable)
nums[2] = 10000;
console.log("After updating index 2:", nums);

/*
------------------------------------------------------------
BASIC MUTATING METHODS (they change the original array)
------------------------------------------------------------
*/

// push(...items): add at the end, returns new length
nums.push(345, 678);
console.log("After push(345, 678):", nums);

// unshift(...items): add at the start, returns new length
nums.unshift(111, 222);
console.log("After unshift(111, 222):", nums);

// pop(): remove last element, returns removed element
var removedLast = nums.pop();
console.log("Removed by pop():", removedLast);
console.log("After pop():", nums);

// shift(): remove first element, returns removed element
var removedFirst = nums.shift();
console.log("Removed by shift():", removedFirst);
console.log("After shift():", nums);

/*
------------------------------------------------------------
LOOKUP / ACCESS METHODS
------------------------------------------------------------
*/

// at(index): supports negative index too (-1 means last)
console.log("Element at index 1 using at():", nums.at(1));
console.log("Last element using at(-1):", nums.at(-1));

// includes(value): checks existence, returns true/false
console.log("Does array include 34?", nums.includes(34));

// indexOf(value, startIndex?): gives first found index, else -1
console.log("indexOf(34):", nums.indexOf(34));
console.log("indexOf(34, 4):", nums.indexOf(34, 4));

/*
------------------------------------------------------------
splice(start, deleteCount, ...items)
Most powerful mutating method:
- Can delete
- Can replace
- Can insert
------------------------------------------------------------
*/

console.log("Before splice operations:", nums);

// Delete 1 item from index 3
nums.splice(3, 1);
console.log("After splice(3, 1):", nums);

// Replace 1 item at index 3 with 30000
nums.splice(3, 1, 30000);
console.log("After splice(3, 1, 30000):", nums);

// Insert 130000 at index 1 without deleting anything
nums.splice(1, 0, 130000);
console.log("After splice(1, 0, 130000):", nums);

/*
------------------------------------------------------------
LOOPS + ARRAYS
Loop is used when we need to process every element.
------------------------------------------------------------
*/

// Sum all numbers using for loop
var total = 0;
for (var i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log("Total sum using for loop:", total);

/*
------------------------------------------------------------
FUNCTIONS + LOOPS + ARRAYS (COMBINATION OF ALL THREE)
Why function?
- Reusable logic
- Cleaner code
- Easy testing and maintenance
------------------------------------------------------------
*/

// Function 1: Calculate sum of any numeric array
function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("getSum(nums):", getSum(nums));

// Function 2: Return only even numbers (manual loop approach)
function getEvenNumbers(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log("Even numbers (loop + function):", getEvenNumbers(nums));

/*
------------------------------------------------------------
ARRAY METHODS + FUNCTIONS
These methods accept callback functions.
They are concise and expressive.
------------------------------------------------------------
*/

// map: transforms each item and returns a new array (original remains same)
var doubled = nums.map(function (value) {
  return value * 2;
});
console.log("map -> doubled:", doubled);

// filter: returns elements that pass condition
var greaterThan100 = nums.filter(function (value) {
  return value > 100;
});
console.log("filter -> values > 100:", greaterThan100);

// reduce: combines array into one value
var reducedTotal = nums.reduce(function (acc, value) {
  return acc + value;
}, 0);
console.log("reduce -> total:", reducedTotal);

/*
forEach vs map/filter/reduce:
- forEach: for side-effects (printing, logging, mutating external variable)
- map/filter/reduce: for producing new data result
*/
nums.forEach(function (value, index) {
  if (index < 3) {
    console.log("forEach sample -> index:", index, "value:", value);
  }
});

/*
============================================================
PRACTICE TASKS (STRICT COMBINATION: LOOPS + FUNCTIONS + ARRAYS)
============================================================
1) Write a function `getAverage(arr)`:
   - Use a loop to find sum.
   - Return average.
   - Handle empty array by returning 0.

2) Write a function `getMax(arr)`:
   - Use loop only (no Math.max spread).
   - Return largest value.

3) Write a function `countOddEven(arr)`:
   - Use loop.
   - Return an object: { odd: x, even: y }.

4) Write a function `removeDuplicates(arr)`:
   - Use loop + includes.
   - Return a new array with unique values.

5) Write a function `reverseArray(arr)`:
   - Use loop to build reversed array manually.
   - Do not use reverse().

6) Write a function `secondLargest(arr)`:
   - Use loop logic.
   - Return second largest unique number.

7) Write a function `getPositiveNumbers(arr)`:
   - First do with loop.
   - Then rewrite using filter.

8) Write a function `sumOfSquares(arr)`:
   - First approach: loop + function.
   - Second approach: map + reduce.

9) Write a function `rotateRight(arr, k)`:
   - Rotate array right by k positions.
   - Use loops and array methods.

10) Build a mini report function `analyzeArray(arr)` returning:
    - total sum
    - average
    - min
    - max
    - even count
    - odd count
    (Use helper functions to practice function composition.)

============================================================
DOCS: NUMBER GUESSING GAME (NO SOLUTION, ONLY BLUEPRINT)
============================================================
Goal:
- User guesses a secret number chosen by the program.
- Program gives hints: "Too high" / "Too low" / "Correct".

Core concepts used:
- Variables (store secret number, attempts, guessed values)
- Functions (separate game logic)
- Loops (repeat until correct guess or attempts over)
- Arrays (store guess history)
- Conditionals (if/else for hints)

Suggested step-by-step design:
1) Decide number range
   - Example: 1 to 100.
   - Secret number should be random inside this range.

2) Create game state variables
   - secretNumber
   - maxAttempts (optional)
   - attemptsUsed
   - guessHistory (array)
   - isGameOver (boolean)

3) Break logic into functions
   - `generateSecret(min, max)` -> returns random number
   - `validateGuess(input, min, max)` -> checks valid number and range
   - `checkGuess(guess, secret)` -> returns "low", "high", or "correct"
   - `printGameStatus(...)` -> current attempts + history

4) Main loop flow
   - While game is not over:
     - Take user input.
     - Validate input.
     - Push guess into history array.
     - Increase attempts.
     - Compare guess with secret.
     - Show hint.
     - End game if correct or attempts exhausted.

5) Optional features
   - Difficulty levels (easy/medium/hard ranges)
   - Score based on fewer attempts
   - Play again option
   - Best score tracking

6) Edge cases to handle
   - Non-number input
   - Number outside allowed range
   - Repeated guesses
   - Empty input

7) Test checklist
   - Correct guess path works
   - High/low hints are accurate
   - Attempt counting is correct
   - Game stops at right time
   - Replay resets all game state correctly

Learning outcome:
- This single project combines loops + functions + arrays in a practical way,
  which is exactly what builds strong JavaScript basics.
*/
