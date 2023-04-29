export default function hero() {
  const heroContainer = document.createElement('section');
  heroContainer.setAttribute('id', 'heroContainer');

  const hero = document.createElement('section');
  hero.setAttribute('class', 'hero');

  heroContainer.appendChild(hero);

  return heroContainer;
}
