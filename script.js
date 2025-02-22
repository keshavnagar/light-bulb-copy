const key = document.querySelector(".key");
const container = document.querySelector(".container");
const turn = document.querySelector(".turn");
key.addEventListener("click", () => {
  container.classList.toggle("on");

  if (container.classList.contains("on")) {
    turn.innerHTML =
      '<div>Turn Off<i class="fa-solid fa-arrow-right"></i></div>';
  } else {
    turn.innerHTML =
      '<div>Turn On<i class="fa-solid fa-arrow-right"></i></div>';
  }
});
