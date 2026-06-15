// print all the numbers of an array

var marks = [24, 2344, 44, 23, 3, 2, 334];

// for (var i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// forEach : returns nothing , sole purpose is to give access to each item

// marks.forEach((item) => {
//   console.log(item);
// });

// print sum of all numbers from array
// var total = 0;

// marks.forEach((item) => {
//   total += item;
// });

// console.log(total);

// map : return a new array with result of performed action

// var x = marks.forEach((mark) => {
//   return mark * 2;
// });

// var y = marks.map((mark) => {
//   return mark * 2;
// });

// console.log(x, y);

// filter out even nubers from array
// var y = marks.map((mark) => {
//   return mark % 2 === 0;
// });

// console.log(y);

// filter : return array of items which passed the condition
// var y = marks.filter((mark) => {
//   return mark % 2 === 0;
// });

// console.log(y);

var z = marks.sort((a, b) => a - b);
console.log(z);
var t = marks.sort((a, b) => b - a);
console.log(t);

var names = ["Apple", "Kiwi", "Sourav", "Kapil"];

// var c = names.sort((a, b) => a.localeCompare(b));
var c = names.sort((a, b) => b.localeCompare(a));
console.log(c);
