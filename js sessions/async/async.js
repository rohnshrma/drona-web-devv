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

async function handleRequest(url) {
  try {
    const data = await sendRequest(url);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
handleRequest("https://jsonplaceholder.typicode.com/users/1");
