'use strict'

const developerInfo__btnElem = document.querySelector('.js-developer-info__btn');
const directionOfDevelopmentElem = document.querySelector('.js-direction-of-development');

function ScrollToDirectionOfDevelopmentElem() {

  directionOfDevelopmentElem.scrollIntoView({block: "center", behavior: "smooth"});

}

developerInfo__btnElem.addEventListener('click', ScrollToDirectionOfDevelopmentElem);
'use strict'

const directionOfDevelopment__btnElem = document.querySelector('.js-direction-of-development__btn');
const priceElem = document.querySelector('.js-price');

function ScrollToPriceElem() {
  
  priceElem.scrollIntoView({block: "center", behavior: "smooth"});

}

directionOfDevelopment__btnElem.addEventListener('click', ScrollToPriceElem);
const exampleProjectsBtnElem = document.querySelector('.js-example-projects__btn');

exampleProjectsBtnElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});
const footerBtnElem = document.querySelector('.js-footer__btn');

footerBtnElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});
'use strict'

const headerMenuBtn = document.querySelector('.js-header__menu-btn');
const headerElem = document.querySelector('.js-header');

function showMenu() {
	headerElem.classList.toggle('menu-open')
}

headerMenuBtn.addEventListener('click', showMenu);



const headerBtnElem = document.querySelector('.js-header__btn');

headerBtnElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});


const modalWindowElem = document.querySelector('.js-modal-window');
const modalWindowOverlayElem = document.querySelector('.js-modal-window-overlay');
const modalWindowcloseButtonElem = document.querySelector('.js-modal-window__close');


modalWindowcloseButtonElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});

modalWindowOverlayElem.addEventListener('click', function() {
  modalWindowElem.classList.add('modal-window_closed');
  modalWindowOverlayElem.classList.add('modal-window_closed');
});