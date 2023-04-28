import './style.css';
const content = document.querySelector('#content');

function navbar() {
  const element = document.createElement('nav');
  element.textContent = 'Hello';
  element.classList.add('test');
  return element;
}

content.appendChild(navbar());
