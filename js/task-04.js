


const counter = document.querySelector("div#counter")

const addOne = counter.querySelector("[data-action=increment]")
const removeOne = counter.querySelector("[data-action=decrement]")
const result = counter.querySelector("span#value")


addOne.addEventListener('click', increase);
let count = 0

function increase() {
    count += 1
    result.textContent = count
}

removeOne.addEventListener('click', decrease);

function decrease() {
    count -= 1
    result.textContent = count
}
