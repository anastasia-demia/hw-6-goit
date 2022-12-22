const inputEl = document.querySelector("input#name-input")
const inputNameEl = document.querySelector("span#name-output")
console.log(inputEl)
console.log(inputNameEl)

inputEl.addEventListener("keyup", changeName)

function changeName(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (inputEl.value.length === 0) {
            inputNameEl.textContent = "Anonymous"
        } else {
            inputNameEl.textContent = inputEl.value
        }
    }
}


