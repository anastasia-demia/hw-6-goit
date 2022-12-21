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

const elements = images.map(picture => {
  const elementLi = document.createElement("li")
  const imgEL = document.createElement('img')
  elementLi.classList.add('item')
  imgEL.classList.add('item-image')
  imgEL.src = picture.url
  imgEL.alt = picture.alt
  imgEL.width = 400
  imgEL.height = 210
  elementLi.style.border = "dashed red 4px"
  elementLi.append(imgEL)
  return elementLi
})

list.append(...elements)
