export function burgerMenu(burgerClass, popupClass) {

  const CLASS_MENU_OPENED = `${popupClass}_opened`
  const CLASS_CLOSEBTN = `${popupClass}__close-btn`

  const burger = document.querySelector(`.${burgerClass}`)
  const menu = document.querySelector(`.${popupClass}`)

  const body = document.querySelector('body')

  burger.addEventListener('click', () => {
    if (!menu.classList.contains(CLASS_MENU_OPENED)) {
      menu.classList.add(CLASS_MENU_OPENED)
      body.classList.add('locked')
    } else {
      menu.classList.remove(CLASS_MENU_OPENED)
      body.classList.remove('locked')
    }
  })

  menu.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      menu.classList.remove(CLASS_MENU_OPENED)
      body.classList.remove('locked')
    }
    if (e.target.classList.contains(CLASS_CLOSEBTN)) {
      menu.classList.remove(CLASS_MENU_OPENED)
      body.classList.remove('locked')
    }
  })

  // ? ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023.98) {
      menu.classList.remove(CLASS_MENU_OPENED)
      body.classList.remove('locked')
    }
  })

}