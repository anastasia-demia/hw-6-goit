const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const list = document.querySelector(".gallery")
list.style.listStyleType = "none"
list.style.display = "flex"
list.style.justifyContent = "space-between"


const title = document.createElement("h2");
title.textContent = "GALLERY";
list.before(title);

function createImageElement (images) {
  return images.map(({url, alt}) => {
    return `
    <li class="list-item">
    <img class = "img" src="${url}", alt="${alt}", width="400", height="250",/>
    </li>
    `
  }).join("")
}

const imagesMarkup = createImageElement(images)
list.insertAdjacentHTML("afterbegin", imagesMarkup)

