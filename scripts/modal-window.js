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