// * custom scripts
import * as browserWebp from "./modules/functions.js"
import * as navbar from "../htmlParts/components/Navbar/navbar.js"
// import 'bootstrap';

// подключение бургера
navbar.burgerMenu()
window.addEventListener('scroll', navbar.fixedNav)

// webp
browserWebp.isWebp()


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

