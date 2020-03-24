'use strict'

const headerMenuBtn = document.querySelector('.js-header__menu-btn');
const headerElem = document.querySelector('.js-header');

function showMenu() {
	headerElem.classList.toggle('menu-open')
}

headerMenuBtn.addEventListener('click', showMenu);





