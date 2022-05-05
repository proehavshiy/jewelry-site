// * custom scripts
import * as browserWebp from "./modules/functions.js"
import * as mobileMenu from "../htmlParts/components/Menu-popup/menu-popup.js"

// подключение бургера
mobileMenu.burgerMenu('burger', 'menu-popup')

// webp
browserWebp.isWebp()


// mobile menu

// menu-popup_opened




// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Autoplay]);
// init Swiper:
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
);

