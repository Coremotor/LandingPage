'use strict'

const developerInfo__btnElem = document.querySelector('.js-developer-info__btn');
const directionOfDevelopmentElem = document.querySelector('.js-direction-of-development');

function ScrollToDirectionOfDevelopmentElem() {

  directionOfDevelopmentElem.scrollIntoView({block: "center", behavior: "smooth"});

}

developerInfo__btnElem.addEventListener('click', ScrollToDirectionOfDevelopmentElem);