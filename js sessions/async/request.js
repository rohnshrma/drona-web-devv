let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  console.log("ready state =>", request.readyState, request.status);
  if (request.readyState == 4 && request.status === 200) {
    console.log(request.readyState, JSON.parse(request.responseText).joke);
  }
  if (request.readyState == 4 && request.status !== 200) {
    console.error("Failed to fetch joke");
  }
});

request.open(
  "GET",
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=single"
);

request.send();

// ready state
// 0 : unsent
// 1 : open function has been called
// 2 : send function has been called
// 3 : download (partial)
// 4 : complete
