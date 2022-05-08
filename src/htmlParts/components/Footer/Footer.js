export default () => {
  const button = document.querySelector('.footer__adresses-heading')
  const adressesBlock = document.querySelector('.footer__adresses_list')
  const STATUSCLASS = 'footer__adresses_opened'

  button.addEventListener('click', () => {
    adressesBlock.classList.toggle(STATUSCLASS)
  })
}