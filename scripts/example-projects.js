const exampleProjectsBtnElem = document.querySelector('.js-example-projects__btn');

exampleProjectsBtnElem.addEventListener('click', function() {
  modalWindowElem.classList.toggle('modal-window_closed');
  modalWindowOverlayElem.classList.toggle('modal-window_closed');
});