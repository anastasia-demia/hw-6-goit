const inputEl = document.getElementById("validation-input")

let totalLength = inputEl.getAttribute("data-length")
let totalLengthNum = parseInt(totalLength, 10)

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputEl.value.length === totalLengthNum) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    }
    if (inputEl.value.length !== totalLengthNum && inputEl.value.length !== 0) {
        inputEl.classList.add("invalid");
    }
};
