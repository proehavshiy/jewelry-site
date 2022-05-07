import Swiper, { Navigation, Autoplay, Grid } from 'swiper';

export default () => {
  return new Swiper('.catalog__swiper', {
    modules: [Navigation, Autoplay, Grid],

    // * default parameters
    enabled: true,
    loop: true,
    effect: 'creative', // Transition effect
    grabCursor: true,
    slidesPerView: 1, // amount of slides per view
    centeredSlides: true, // центрирование активного слайда
    spaceBetween: 10,
    speed: 1000, // скорость анимации смены слайдов
    breakpoints: {
      768: {
        slidesPerView: 3,
        enabled: false,
        grabCursor: false,
        grid: {
          rows: 2,
          fill: 'row'
        },
        loop: false,
        spaceBetween: 30,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.catalog__swiper-next',
      prevEl: '.catalog__swiper-prev',
    },
  });
}