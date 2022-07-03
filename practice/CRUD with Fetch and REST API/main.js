var gameApi = "http://localhost:3000/games";

function start() {
  getGames(renderGames);
  handlerCreateForm();
}

start();

// function
function getGames(callback) {
  fetch(gameApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      callback(response);
    });
}

function Game(name, price) {
  this.name = name;
  this.price = price;
}

// POST
function createGame(data, callback) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(gameApi, options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      callback();
    });
}

// DELETE
function handlerDeleteGame(id) {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch(gameApi + "/" + id, options)
    .then((response) => {
      return response.json();
    })
    .then(() => {
      var gameItem = document.querySelector(".game-item" + "-" + id);
      if (gameItem) {
        gameItem.remove();
      }
    });
}

// PUT
function handlerUpdateGame(data, id) {
  console.log(data);
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(gameApi + "/" + id, options)
    .then((response) => {
      return response.json();
    })
    .then(() => {
      getGames(renderGames);
    });
}

function handlerGetGameToUpdate(id) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  fetch(gameApi + "/" + id, options)
    .then((response) => {
      return response.json();
    })
    .then((game) => {
      var gameItemUpdateBlock = document.querySelector(`.game-item-${game.id}`);
      var name = document.querySelector("input[name='name']");
      var price = document.querySelector("input[name='price']");
      var createBtn = document.querySelector("#create");

      if (createBtn.style.display != "none") {
        // ẩn nút create
        createBtn.style.display = "none";
        // tạo 1 nút save
        var btnBlock = document.querySelector("#button");
        var newButton = document.createElement("button");
        newButton.innerText = "Save";
        var saveBtn = btnBlock.appendChild(newButton);
      }

      // điền dữ liệu vào form
      name.value = gameItemUpdateBlock.querySelector("h4").innerText;
      price.value = gameItemUpdateBlock
        .querySelector("p")
        .innerText.split(" ")[0];

      saveBtn.addEventListener("click", () => {
        let newData = new Game(name.value, price.value);
        handlerUpdateGame(newData, id);
      });
    });
}

function renderGames(games) {
  var listGamesBlock = document.querySelector("#list-games");
  var html = games.map((game) => {
    return `<li class = "game-item-${game.id}"">
                <h4>${game.name}</h4>
                <p>${game.price} VND</p>
                <button onclick = "handlerDeleteGame(${game.id})"> Xoá </button>
                <button onclick="handlerGetGameToUpdate(${game.id})"> Sửa </button>
            </li>`;
  });
  listGamesBlock.innerHTML = html.join("");
}

function handlerCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", (e) => {
    var name = document.querySelector("input[name='name']").value;
    var price = document.querySelector("input[name='price']").value;

    if (price == "") {
      price = 0;
    }
    let game = new Game(name, price);

    createGame(game, (gameItem) => {
      getGames(renderGames);
    });
  });
}
