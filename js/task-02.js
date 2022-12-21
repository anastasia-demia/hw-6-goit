const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients")
const title = document.createElement("h2");
title.textContent = "INGREDIENTS";
list.before(title);

const elements = ingredients.map(element => {
  const elementLi = document.createElement("li")
  elementLi.classList.add('item')
  elementLi.textContent = element

  return elementLi
})

list.append(...elements)
