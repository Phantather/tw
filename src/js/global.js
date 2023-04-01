//Language switcher start
let languageSelect = document.querySelector('#language-select');
let languageOption = document.querySelector('#language-select-option');

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage['lang']) {
    // if lang is set
    languageSelect.value = localStorage['lang']; // set the value
  }
  languageSelect.onchange = function () {
    localStorage['lang'] = this.value; // change localStorage on change
  };
});

languageSelect.addEventListener('change', ({ target: { value } }) => {
  document.cookie = `lang=${value}`;
  window.location.reload();
});
//Language switcher end

// let formApplication = document.querySelector('#form-application');

// formApplication.addEventListener('')
