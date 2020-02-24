let headerElem = document.querySelector('.js-header');
let headerBtnElem = document.querySelector('.js-header__btn');


//ф-ия смены текста в элементе DOM при определенном размере окна
function setupForWidth(mql) {
  if (mql.matches) {
    
    headerBtnElem.innerHTML = '';
  } else {
    headerBtnElem.innerHTML = 'Заказать звонок';
  }
}

//получение результата "медиа запроса"
let mql = window.matchMedia("(max-width: 1024px)");

// Добавим прослушку на смену результата
mql.addListener(setupForWidth); 
 
setupForWidth(mql);