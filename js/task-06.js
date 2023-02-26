const inputEl = document.getElementById("validation-input")

let totalLength = inputEl.getAttribute("data-length")
let totalLengthNum = parseInt(totalLength, 10)

inputEl.addEventListener('blur', onInputBlur)

function deleteClass(input) {
    inputEl.classList.remove(input);
}
function addClass(input) {
    inputEl.classList.add(input);
}

function onInputBlur() {
    if (inputEl.value.length === totalLengthNum) {
        deleteClass("invalid")
        addClass("valid");
    } else {
        addClass("invalid")
    }
};
