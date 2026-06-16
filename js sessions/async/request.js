// Create a new XMLHttpRequest object.
//
// Think of this object as a "delivery person" that will
// carry our request to the server and bring back the response.
let request = new XMLHttpRequest();

// Listen for every change in the request lifecycle.
//
// The "readystatechange" event fires multiple times as
// the request progresses from start to finish.
request.addEventListener("readystatechange", () => {
  // Display current state and HTTP status code.
  //
  // readyState tells us WHERE the request currently is.
  // status tells us whether the server succeeded or failed.
  console.log("ready state =>", request.readyState, request.status);

  // SUCCESS CASE
  //
  // readyState === 4
  // Means the request is completely finished.
  //
  // status === 200
  // Means the server successfully processed the request.
  if (request.readyState === 4 && request.status === 200) {
    // The API returns data as a JSON string.
    //
    // Example response:
    // '{"error":false,"category":"Programming","joke":"..."}'
    //
    // JSON.parse() converts the string into a JavaScript object.
    console.log(request.readyState, JSON.parse(request.responseText));
  }

  // FAILURE CASE
  //
  // Request completed but server returned an error.
  //
  // Example:
  // 404 = Not Found
  // 500 = Internal Server Error
  if (request.readyState === 4 && request.status !== 200) {
    console.error("Failed to fetch joke");
  }
});

// Configure the request.
//
// open(method, url)
//
// GET = retrieve data from server
//
// This line DOES NOT send the request.
// It only prepares/configures it.
request.open(
  "GET",
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=single"
);

// Actually send the request to the server.
//
// After this line the browser contacts the server.
//
// The request will continue in the background.
request.send();

// ready state
// 0 : unsent
// 1 : open function has been called
// 2 : send function has been called
// 3 : download (partial)
// 4 : complete
