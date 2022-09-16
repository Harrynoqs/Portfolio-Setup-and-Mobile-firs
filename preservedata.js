const submitBtn = document.getElementById('sbm');

submitBtn.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let text = document.getElementById('text');

  name = name.value;
  localStorage.setItem('name', name);

  email = email.value;
  localStorage.setItem('email', email);

  text = text.value;
  localStorage.setItem('text', text);
});
>>>>>>> 9ed87d52ff2e0e7dfdecf690dc702331a00f9af8

submitBtn.addEventListener('click', () => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let text = document.getElementById('text');

  name = name.value;
  localStorage.setItem('name', name);

  email = email.value;
  localStorage.setItem('email', email);

  text = text.value;
  localStorage.setItem('text', text);
});
