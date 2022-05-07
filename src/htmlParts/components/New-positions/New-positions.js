import Swiper, { Navigation, Autoplay, Grid } from 'swiper';

export default () => {
  return new Swiper('.new-positions__swiper', {
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
        enabled: false,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.new-positions__swiper-next',
      prevEl: '.new-positions__swiper-prev',
    },
  });
}