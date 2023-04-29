//Import Image
import liElement from './helpful_functions/liElementMaker';

export default function navbar() {
  const sectionContainer = document.createElement('section');
  sectionContainer.setAttribute('id', 'navbarContainer');

  const navbarContainer = document.createElement('nav');
  navbarContainer.setAttribute('class', 'navbar');
  sectionContainer.appendChild(navbarContainer);

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'imageHolder');
  const logoTitle = document.createElement('h1');
  logoTitle.setAttribute('class', 'logoTitle');
  logoTitle.textContent = 'Bondi';

  imageContainer.appendChild(logoTitle);
  navbarContainer.appendChild(imageContainer);

  const unorderListContainer = document.createElement('ul');
  unorderListContainer.setAttribute('class', 'user-links');

  navbarContainer.appendChild(unorderListContainer);

  unorderListContainer.appendChild(liElement('HOME', 'liElement', 'userLink'));
  unorderListContainer.appendChild(liElement('ABOUT', 'liElement', 'userLink'));
  unorderListContainer.appendChild(liElement('MENU', 'liElement', 'userLink'));
  unorderListContainer.appendChild(
    liElement('CONTACT', 'liElement', 'userLink')
  );

  return sectionContainer;
}

//Section Container
// -> nav
// ->->div (imgHolder)
// ->->->img
// ->->ul (nav-list)
// ->->-> li * 4

//make a function for hamburger menu

function hamburgerMenu() {}
