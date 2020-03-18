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

