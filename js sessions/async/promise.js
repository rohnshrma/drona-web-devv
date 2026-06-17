// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("Eligible");
//       } else {
//         reject("Not Eligible");
//       }
//     }, 5000);
//   });
// }

// checkAge(12)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        reject("Failed to fetch data");
      }
    });

    request.open("GET", url);
    request.send();
  });
}

sendRequest("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/4")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/5")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/6")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/7")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
sendRequest("https://jsonplaceholder.typicode.com/users/9")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
