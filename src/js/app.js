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

import catalogSwiper from '../htmlParts/components/Catalog/Catalog.js';
catalogSwiper()

import newPositionsSwiper from '../htmlParts/components/New-positions/New-positions.js';
newPositionsSwiper()

import bonusSwiper from '../htmlParts/components/Bonus/Bonus.js';
bonusSwiper()

import saleSwiper from '../htmlParts/components/Sale/Sale.js';
saleSwiper()

