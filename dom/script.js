// console.log(document);

// selector

// id selector : single element
var h2 = document.getElementById("intro");
console.log(h2);

// class selector :
var para = document.getElementsByClassName("para");

console.log(para);

// tagname selector
var ps = document.getElementsByTagName("h1");
console.log(ps);

// query selector : selects first occurance

console.log(document.querySelector("#intro"));
console.log(document.querySelector(".para"));
console.log(document.querySelector("h1"));

// query selector All : selects all occurances

console.log(document.querySelectorAll("#intro"));
console.log(document.querySelectorAll(".para"));
console.log(document.querySelectorAll("h1"));

// get
// innertext
console.log(h2.innerText);

// innerHTML
console.log(h2.innerHTML);

// Set
// innertext
h2.innerText = "bye bye <u>ROhan</u>";

// innerHTML

h2.innerHTML = "bye bye <u>ROhan</u>";

// get attribute list

console.log(h2.attributes);

// get attribute value
console.log(h2.getAttribute("id"));

// set attribute value

h2.setAttribute("style", "color:red;");
h2.setAttribute("style", "color:red;background-color:yellow;");
h2.setAttribute("class", "champak");

h2.addEventListener("click", () => {
  h2.innerText = "text changed";
});

console.log(h2.classList);
console.log(h2.classList.add("hello"));
console.log(h2.classList);
console.log(h2.classList.remove("champak"));
console.log(h2.classList);

var img = document.querySelector("img");
var on = document.querySelector(".on");
var off = document.querySelector(".off");

console.log(on, off, img);

on.addEventListener("click", function () {
  img.setAttribute("src", "./idea.png");
});
off.addEventListener("click", function () {
  img.setAttribute("src", "./lightbulb.png");
});
