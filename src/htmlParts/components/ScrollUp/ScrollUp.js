export default () => {
  const scrollUpBtn = document.querySelector('.scroll-up__button')

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(scrollX, 0);
  })
}