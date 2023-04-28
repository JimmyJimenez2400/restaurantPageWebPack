import './style.css';
const body = document.querySelector('body');
const content = document.createElement('div');
content.setAttribute('id', 'content');

body.appendChild(content);

function navbar() {
  const element = document.createElement('nav');
  element.textContent = 'Hello';
  element.classList.add('test');
  return element;
}

content.appendChild(navbar());
