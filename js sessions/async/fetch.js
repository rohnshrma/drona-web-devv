const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&type=single";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data.joke))
  .catch((err) => {
    console.log(err);
  });
