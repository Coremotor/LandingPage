'use strict'

const directionOfDevelopment__btnElem = document.querySelector('.js-direction-of-development__btn');
const priceElem = document.querySelector('.js-price');

function ScrollToPriceElem() {
  
  priceElem.scrollIntoView({block: "center", behavior: "smooth"});

}

directionOfDevelopment__btnElem.addEventListener('click', ScrollToPriceElem);