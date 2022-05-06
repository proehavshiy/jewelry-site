import Swiper, { Navigation, Autoplay, Grid } from 'swiper';

export default () => {
  return new Swiper('.promo__swiper', {
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
      // 1024: {
      //   enabled: true,
      //   slidesPerView: 1
      // }
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false, // возобновляет автоплей после интерактива со свайпером
      pauseOnMouseEnter: true,
    },

    grid: {
      rows: 1, // rows > 1 is currently not compatible with loop mode (loop: true)
      fill: 'column',
    },


    // Navigation arrows
    navigation: {
      nextEl: '.promo__swiper-next',
      prevEl: '.promo__swiper-prev',
    },
  });
}