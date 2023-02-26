const categoriesEl = document.querySelectorAll('li.item')
console.log('Number of categories: ', categoriesEl.length)

categoriesEl.forEach((element) => {
    console.log("Category: ", element.querySelector("h2").textContent);
    console.log("Elements: ", element.querySelectorAll("li").length);
});