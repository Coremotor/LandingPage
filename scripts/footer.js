const footerBtnElem = document.querySelector('.js-footer__btn');

footerBtnElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});