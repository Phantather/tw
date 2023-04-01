const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['ru', 'ky', 'en'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'ru',
  cookie: 'lang',
});

module.exports = i18n;
