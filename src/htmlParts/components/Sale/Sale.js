import Swiper, { Navigation, Autoplay, Grid } from 'swiper';

export default () => {
  return new Swiper('.sale__swiper', {
    modules: [Navigation, Autoplay, Grid],

    // * default parameters
    autoHeight: true,
    effect: 'creative', // Transition effect
    grabCursor: true,
    autoHeight: true, // авто-вдвптация контейнера свайпера под высоту активного слайда
    slidesPerView: 2.5, // amount of slides per view
    spaceBetween: 12,
    speed: 1000, // скорость анимации смены слайдов
    breakpoints: {
      // when window width is >= 1024px
      1539: {
        spaceBetween: 30,
        slidesPerView: 6,
      },
      1279: {
        spaceBetween: 38,
        slidesPerView: 4,
      },
      426: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      321: {
        spaceBetween: 12,
        // slidesPerView: 3,
      },
    },
  });
}