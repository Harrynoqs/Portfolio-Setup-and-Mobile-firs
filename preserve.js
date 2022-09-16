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


