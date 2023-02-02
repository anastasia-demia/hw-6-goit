const inputEl = document.getElementById("font-size-control")
const spanEl = document.getElementById("text")

inputEl.oninput = function () {
    spanEl.style.fontSize = inputEl.value + "px";
};