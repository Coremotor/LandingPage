'use strict'

const developerInfo__btnElem = document.querySelector('.js-developer-info__btn');
const directionOfDevelopmentElem = document.querySelector('.js-direction-of-development');
const directionOfDevelopment__btnElem = document.querySelector('.js-direction-of-development__btn');
const priceElem = document.querySelector('.js-price');

function ScrollToDirectionOfDevelopmentElem() {
  directionOfDevelopmentElem.scrollIntoView({block: "center", behavior: "smooth"});
}

function ScrollToPriceElem() {  
  priceElem.scrollIntoView({block: "center", behavior: "smooth"});
}


developerInfo__btnElem.addEventListener('click', ScrollToDirectionOfDevelopmentElem);

directionOfDevelopment__btnElem.addEventListener('click', ScrollToPriceElem);