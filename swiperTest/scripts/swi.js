
var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})
