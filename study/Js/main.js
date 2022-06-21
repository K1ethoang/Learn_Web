var heading = document.querySelector(".heading");
var btn = document.querySelector("button");

function run() {
  heading.classList.toggle("style");
}

btn.addEventListener("click", run);
