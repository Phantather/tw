const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['ru', 'kg'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'ru',
});

module.exports = i18n;
