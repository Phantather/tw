let languageSelect = document.querySelector('#language-select');

languageSelect.addEventListener('change', ({ target: { value } }) => {
  document.cookie = `lang=${value}`;
  window.location.reload();
});
