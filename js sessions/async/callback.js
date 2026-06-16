// Reusable function for making API requests.
//
// cb = callback function
// url = API endpoint
function fetchJoke(cb, url) {
  // Create request object
  let request = new XMLHttpRequest();

  // Listen for request state changes
  request.addEventListener("readystatechange", () => {
    // Request completed successfully
    if (request.readyState === 4 && request.status === 200) {
      // Convert JSON string into JS object
      const data = JSON.parse(request.responseText);

      // Execute callback
      //
      // First argument = data
      // Second argument = error
      cb(data, null);
    }

    // Request completed but failed
    if (request.readyState === 4 && request.status !== 200) {
      // Execute callback
      //
      // First argument = data
      // Second argument = error message
      cb(null, "Failed to fetch joke");
    }
  });

  // Configure request
  request.open("GET", url);

  // Send request
  request.send();
}

// Call the function
fetchJoke(
  // Callback function
  (data, err) => {
    // Success case
    if (!err) {
      return console.log("DATA =>", data);
    }

    // Error case
    console.log(err);
  },

  // API URL
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=single"
);
