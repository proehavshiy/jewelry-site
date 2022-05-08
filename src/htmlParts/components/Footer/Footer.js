export default () => {
  const button = document.querySelector('.footer__adresses-heading')
  const adressesBlock = document.querySelector('.footer__adresses_list')
  const STATUSCLASS = 'footer__adresses_opened'

  console.log('консоль:', button);

  button.addEventListener('click', () => {
    console.log('adressesBlock.style.display:', adressesBlock.classList.contains(STATUSCLASS));

    adressesBlock.classList.toggle(STATUSCLASS)
  })
}