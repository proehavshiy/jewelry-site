// * custom scripts
import * as browserWebp from "./modules/functions.js"
import * as mobileMenu from "../htmlParts/components/Menu-popup/menu-popup.js"
// Swipers
import promoSwiper from '../htmlParts/components/Promo/Promo.js';
import catalogSwiper from '../htmlParts/components/Catalog/Catalog.js';
import newPositionsSwiper from '../htmlParts/components/New-positions/New-positions.js';
import bonusSwiper from '../htmlParts/components/Bonus/Bonus.js';
import saleSwiper from '../htmlParts/components/Sale/Sale.js';
import toggleFooterAdresses from '../htmlParts/components/Footer/Footer.js';

// подключение бургера
mobileMenu.burgerMenu('burger', 'menu-popup')

// webp
browserWebp.isWebp()

promoSwiper()
catalogSwiper()
newPositionsSwiper()
bonusSwiper()
saleSwiper()
toggleFooterAdresses()

