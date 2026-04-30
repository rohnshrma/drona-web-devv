// arthmetic operators

var x = 10;
var y = 2;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// assignment operator

var z = 10;

z += 10; // add and assign
console.log(z);
z -= 10; // add and assign
console.log(z);
z *= 10; // add and assign
console.log(z);
z /= 10; // add and assign
console.log(z);
z %= 10; // add and assign
console.log(z);
z **= 10; // add and assign
console.log(z);

//comparison operator

// > : greater
console.log(12 > 10);
// >= : greater or equals
console.log(12 >= 10);
// < : lesser
console.log(2 < 10);
// <= : lesser or equals
console.log(2 <= 10);
// == : equals (checks value only)
console.log(20 == "20"); // true
// === : strict equals (checks value and data types)
console.log(20 === "20"); // false
// != : not equals (checks value only)
console.log(20 != "20"); // false
// !== : strict not equals (checks value and data types)
console.log(20 !== "20"); // true

// logical operator
// && : and needs all the conditions to be true to give a truthy answer

console.log(12 > 10 && 10 < 12); // t && t = t
console.log(12 < 10 && 10 < 12); // f && t = f
console.log(12 < 10 && 10 > 12); // f && f = f

// || : or needs atleast one of the conditions to be true to give a truthy answer
console.log(12 > 10 || 10 < 12); // t || t = t
console.log(12 < 10 || 10 < 12); // f || t = t
console.log(12 < 10 || 10 > 12); // f || f = f

// ! : reverse boolean outcome

console.log(!true);
console.log(!false);
