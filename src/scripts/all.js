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


'use strict'

const headerMenuBtn = document.querySelector('.js-header__menu-btn');
const headerElem = document.querySelector('.js-header');

function showMenu() {
	headerElem.classList.toggle('menu-open')
}

headerMenuBtn.addEventListener('click', showMenu);






const modalWindowElem = document.querySelector('.js-modal-window');
const modalWindowOverlayElem = document.querySelector('.js-modal-window-overlay');
const modalWindowcloseButtonElem = document.querySelector('.js-modal-window__close');

const headerBtnElem = document.querySelector('.js-header__btn');
const exampleProjectsBtnElem = document.querySelector('.js-example-projects__btn');
const footerBtnElem = document.querySelector('.js-footer__btn');

const bodyElem = document.querySelector('.js-body'); 

function onBtnOrder () {
  bodyElem.classList.toggle('modal-window-open');
  bodyElem.addEventListener('keydown', onBtnEscape);
  modalWindowcloseButtonElem.addEventListener('click', ClickOnCloseBtnAndOverlay);
  modalWindowOverlayElem.addEventListener('click', ClickOnCloseBtnAndOverlay)
}

function ClickOnCloseBtnAndOverlay() {
  bodyElem.classList.toggle('modal-window-open');
  bodyElem.removeEventListener('keydown', onBtnEscape);
  modalWindowcloseButtonElem.removeEventListener('click', ClickOnCloseBtnAndOverlay);
  modalWindowOverlayElem.removeEventListener('click', ClickOnCloseBtnAndOverlay);
}

function onBtnEscape() {
  if (event.code === 'Escape' ) {
    bodyElem.classList.toggle('modal-window-open');
    bodyElem.removeEventListener('keydown', onBtnEscape);
  }
}

headerBtnElem.addEventListener('click', onBtnOrder);

exampleProjectsBtnElem.addEventListener('click', onBtnOrder);

footerBtnElem.addEventListener('click', onBtnOrder);

bodyElem.addEventListener('keydown', onBtnEscape);