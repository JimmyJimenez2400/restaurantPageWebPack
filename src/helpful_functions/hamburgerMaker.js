export default function hamburgerMenu() {
  const hamburgerButton = document.createElement('button');
  hamburgerButton.setAttribute('id', 'toggle');
  hamburgerButton.setAttribute('aria-expanded', 'false');

  hamburgerButton.textContent = 'Menu';
  return hamburgerButton;
}
