var car = {
  model: "i10",
  brand: "Hyundai",
  year: 2025,
  // the value of this keyword in an arrow function inside of an object is the window object
  // info: () => {
  //   console.log("Hello world this is info message", this);
  // },

  // the value of this keyword in an anonymous function inside of an object is the object itself
  // info: function () {
  //   console.log("Hello world this is info message", this);
  // },

  start: function () {
    console.log(`${this.model} engine started`);
  },
};

console.log(car);
console.log(car["model"]);
console.log(car.model);

// car.info();
car.start();

car["isIndian"] = false;
console.log(car);

// creating a machine which can build objects for us : constructor | class

function CarMachine(model, brand, year) {
  // {}
  console.log("this before initialization", this);
  this.model = model;
  this.brand = brand;
  this.year = year;
  this.startEngine = function () {
    console.log(`${this.model} engine started`);
  };

  console.log("this after initialization", this);
}

var x = new CarMachine("figo", "ford", 2020);
console.log(x);

x.startEngine();

// function Book(author, title, pages, genre) {
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.genre = genre;
//   this.info = function () {
//     console.log(
//       `${this.title} by ${this.author} is of ${this.pages} pages and is bestseller in ${this.genre} genre`
//     );
//   };
// }

// let b = new Book("dhrona", "bhoot bangla", 200, "bakwas");
// console.log(b);
// b.info();

class Book {
  constructor(author, title, pages, genre) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    console.log("Book Added");
  }
  info() {
    console.log(
      `${this.title} by ${this.author} is of ${this.pages} pages and is bestseller in ${this.genre} genre`
    );
  }
}

var maths = new Book("RD VERMA", "Maths", 1000, "Horror");

console.log(maths);

maths.info();

class Student {
  constructor(name, age, uni) {
    this.name = name;
    this.age = age;
    this.uni = uni;
  }
  details() {
    console.log(
      `name is ${this.name} and he is ${this.age} years old study in ${this.uni}`
    );
  }
}

let info = new Student("dhrona", 18, "delhi university");
info.details();

console.log(info);
