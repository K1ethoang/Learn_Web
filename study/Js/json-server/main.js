var gamesApi = "http://localhost:3000/games";

fetch(gamesApi)
  .then((response) => {
    return response.json();
  })
  .then((games) => {
    console.log(games);
  });
