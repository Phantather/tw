const express = require('express');
const app = express();

//Functions
const { getCookieFromHeaders } = require('./src/js/cookies');

//Require Routes
const homeRoute = require('./routes/home');
const archiveRoute = require('./routes/archive');
const colabRoute = require('./routes/colobarators');
const eventsRoute = require('./routes/events');
const founderRoute = require('./routes/founder');
const historyRoute = require('./routes/history');
const galleryRoute = require('./routes/gallery');
const contactRoute = require('./routes/contact');
const missionRoute = require('./routes/mission');
const newsRoute = require('./routes/news');
const projectsRoute = require('./routes/projects');
const supportRoute = require('./routes/support');
const i18n = require('./i18n');

//Base port
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

//Config
app.use(i18n.init);
app.use(function (req, res, next) {
  let lang = getCookieFromHeaders('lang', req.headers.cookie) || 'ru';
  i18n.init(req, res);
  i18n.setLocale(req, lang);
  return next();
});

//read files
app.use(express.static(__dirname + '/src'));

// Маршруты
app.use(homeRoute);
app.use(archiveRoute);
app.use(colabRoute);
app.use(eventsRoute);
app.use(founderRoute);
app.use(historyRoute);
app.use(galleryRoute);
app.use(contactRoute);
app.use(missionRoute);
app.use(newsRoute);
app.use(projectsRoute);
app.use(supportRoute);

//Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен, адрес - http://localhost:${PORT}`);
});
