const inputEl = document.querySelector("input#name-input")
const outputEL = document.querySelector("span#name-output")


inputEl.addEventListener("input", changeName)

function changeName(event) {
    event.preventDefault();
    if (!inputEl.value.trim()) {
        outputEL.textContent = "Anonymous"
    } else {
        outputEL.textContent = inputEl.value
    }
}



