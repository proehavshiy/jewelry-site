import Swiper, { Navigation, Autoplay, Grid } from 'swiper';

export default () => {
  return new Swiper('.bonus__swiper', {
    modules: [Navigation, Autoplay, Grid],

    // * default parameters
    // direction:	'horizontal' | 'vertical'
    //enabled: false, // включен ли изначально слайдер

    loop: true,
    effect: 'creative', // Transition effect
    grabCursor: true,
    autoHeight: true, // авто-вдвптация контейнера свайпера под высоту активного слайда
    slidesPerView: 1, // amount of slides per view
    // slidesPerGroup: 1, //Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
    centeredSlides: true, // центрирование активного слайда
    spaceBetween: 100,
    speed: 1000, // скорость анимации смены слайдов
    breakpoints: {
      // when window width is >= 1024px
      768: {
        enabled: false
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.bonus__swiper-next',
      prevEl: '.bonus__swiper-prev',
    },
  });
}