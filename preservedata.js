const names = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const form = document.querySelector('form');
const body = document.querySelector('body');

const retrieveData = localStorage.getItem('user');

body.onload = () => {
  if (retrieveData) {
    const store = JSON.parse(retrieveData);
    names.value = store.names;
    email.value = store.email;
    text.value = store.text;
  }
};

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();

    const nameData = document.getElementById('name').value;
    const emailData = document.getElementById('email').value;
    const textData = document.getElementById('text').value;

    const userStore = {
      name: nameData,
      email: emailData,
      text: textData,
    };

    localStorage.setItem('user', JSON.stringify(userStore));
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
