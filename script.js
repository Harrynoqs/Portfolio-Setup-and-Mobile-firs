const menuBtn = document.getElementById('mobile-navi');

const nav = document.querySelector('nav');

const closeBtn = document.getElementById('mobile-close');

const menu = document.getElementsByClassName('menu');

function open() {
  nav.style.display = 'flex';
  console.log('its working');
}
menuBtn.addEventListener('click', open);

function close() {
  nav.style.display = 'none';
  console.log('its working');
}


