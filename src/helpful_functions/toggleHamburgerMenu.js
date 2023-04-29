export default function toggleHambugerMenu() {
  let hamburgerButton = document.querySelector('#toggle');
  const menu = document.querySelector('.not-active');
  console.log(hamburgerButton);
  console.log(menu);

  hamburgerButton.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      console.log('FOUND');
      this.setAttribute('aria-expanded', 'false');
      menu;
      menu.classList.add('not-active');
      menu.classList.remove('is-active');
      return;
    } else {
      console.log('NOT FOUND');
      menu.classList.remove('not-active');
      menu.classList.add('is-active');
      this.setAttribute('aria-expanded', 'true');
      return;
    }
  });

  return hamburgerButton;
}
