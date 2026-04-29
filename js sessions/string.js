// STRING IN JAVASCRIPT
// A string is a sequence of characters (letters, numbers, symbols, and spaces).
// Strings can be written using single quotes (' '), double quotes (" "), or backticks (` `).

// NOTE:
// Values from prompt() are always strings by default.
// You can convert them into other data types when needed.

var ageAsFloat = parseFloat(prompt("Enter your age (float): "));
var ageAsInt = parseInt(prompt("Enter your age (int): "));
var ageAsNumber = Number(prompt("Enter your age (number): "));
var ageAsString = prompt("Enter your age (string): ");

console.log(typeof ageAsFloat, ageAsFloat);
console.log(typeof ageAsInt, ageAsInt);
console.log(typeof ageAsNumber, ageAsNumber);
console.log(typeof ageAsString, ageAsString);

// CONCATENATION
// Concatenation means joining two or more strings.

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var age = parseInt(prompt("Enter your age: "));

console.log(
  "Hello, my name is " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old."
);

// TEMPLATE LITERALS
// Template literals use backticks (` `).
// Variables are inserted with ${...}.

console.log(
  `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`
);

// INDEXING
// Indexing starts at 0.
// You can access characters using str[index].

//  h e l l o
//  1 2 3 4 5   (normal counting)
//  0 1 2 3 4   (positive indexing)
// -5-4-3-2-1   (negative indexing, supported by only some methods like at() and slice())

var txt = "hello world this is john doe";

// First character (index 0)
console.log(txt[0]);

// Last character (length - 1)
console.log(txt[txt.length - 1]);

// STRING METHODS

// toUpperCase() -> returns a new string in uppercase
console.log(txt.toUpperCase());

// toLowerCase() -> returns a new string in lowercase
console.log(txt.toLowerCase());

// charAt(index) -> character at index (negative index does not work here)
console.log(txt.charAt(0));
console.log(txt.charAt(-1)); // empty string

// at(index) -> character at index (supports negative index)
console.log(txt.at(0));
console.log(txt.at(-1));

// slice(start, end) and substring(start, end)
// Both return part of a string. End is exclusive.
// slice() supports negative indexes, substring() does not.
console.log(txt.slice(0, 5));
console.log(txt.substring(0, 5));
console.log(txt.slice(-5, -1));
console.log(txt.substring(-5, -1)); // treated as substring(0, 0) => ""

// startsWith(substring, startIndex)
console.log(txt.startsWith("h"));
console.log(txt.startsWith("d", 10));

// endsWith(substring, length)
// Second argument is the length of string to consider (not index).
console.log(txt.endsWith("e"));
console.log(txt.endsWith("d", 11));

// split(separator) -> converts string into array
console.log(txt.split()); // [full string]
console.log(txt.split("")); // every character
console.log(txt.split(" ")); // words
console.log(txt.split("o")); // split wherever "o" appears

// trim() / trimStart() / trimEnd()
// Remove whitespaces from both/start/end.
console.log("     trim          ".trim());
console.log("     trim          ".trimStart());
console.log("     trim          ".trimEnd());

// indexOf(substring, startIndex) -> first occurrence index, -1 if not found
console.log(txt.indexOf("o"));
console.log(txt.indexOf("o", 6));

// lastIndexOf(substring, fromIndex) -> last occurrence index
console.log(txt.lastIndexOf("o"));
console.log(txt.lastIndexOf("o", 8));

// replace(oldValue, newValue) -> replaces first occurrence
console.log(txt.replace("o", "x"));

// replaceAll(oldValue, newValue) -> replaces all occurrences
console.log(txt.replaceAll("o", "x"));

// repeat(count) -> repeats the string count times
console.log(txt.repeat(2));

// REMAINING IMPORTANT STRING METHODS

// includes(substring, startIndex) -> true/false
console.log(txt.includes("john"));
console.log(txt.includes("john", 22));

// search(value) -> index of first match, -1 if not found (supports regex)
console.log(txt.search("world"));
console.log(txt.search(/john/));

// match(regex) -> returns match result array or null
var sentence = "I have 2 apples and 10 bananas";
console.log(sentence.match(/\d+/)); // first match
console.log(sentence.match(/\d+/g)); // all matches

// concat() -> joins strings (same result as +)
var first = "Hello";
var second = "World";
console.log(first.concat(" ", second, "!"));

// padStart(targetLength, padString), padEnd(targetLength, padString)
// Adds characters until string reaches target length.
var orderId = "57";
console.log(orderId.padStart(5, "0"));
console.log(orderId.padEnd(5, "x"));

// charCodeAt(index) -> UTF-16 code of character at index
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97

// String.fromCharCode(...codes) -> creates string from UTF-16 codes
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Hello

// localeCompare(otherString)
// Returns negative / 0 / positive based on string comparison.
console.log("apple".localeCompare("banana"));
console.log("cat".localeCompare("cat"));

// valueOf() and toString()
// Both return primitive string value from a String object.
var boxed = new String("javascript");
console.log(boxed.valueOf());
console.log(boxed.toString());
