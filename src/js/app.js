// * custom scripts
import * as browserWebp from "./modules/functions.js"
import * as mobileMenu from "../htmlParts/components/Menu-popup/menu-popup.js"

// подключение бургера
mobileMenu.burgerMenu('burger', 'menu-popup')

// webp
browserWebp.isWebp()


// Swipers
import promoSwiper from '../htmlParts/components/Promo/Promo.js';
promoSwiper()

