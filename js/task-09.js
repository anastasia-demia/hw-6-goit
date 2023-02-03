function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body")
const buttonEl = document.querySelector("button.change-color")
const spanEl = document.querySelector("span.color")

buttonEl.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
})

buttonEl.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  buttonEl.style.backgroundColor = color;
})