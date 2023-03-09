const express = require('express');
const app = express();
const homeRoute = require('./routes/home')
const archiveRoute = require('./routes/archive')
const colabRoute = require('./routes/colobarators')
const eventsRoute = require('./routes/events')
const founderRoute = require('./routes/founder')
const historyRoute = require('./routes/history')
const galleryRoute = require('./routes/gallery')
const contactRoute = require('./routes/contact')
const missionRoute = require('./routes/mission')
const newsRoute = require('./routes/news')
const projectsRoute = require('./routes/projects')
const supportRoute = require('./routes/support')

const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/src'));




// Маршруты
app.use(homeRoute)
app.use(archiveRoute)
app.use(colabRoute)
app.use(eventsRoute)
app.use(founderRoute)
app.use(historyRoute)
app.use(galleryRoute)
app.use(contactRoute)
app.use(missionRoute)
app.use(newsRoute)
app.use(projectsRoute)
app.use(supportRoute)


// // Запуск сервера
app.listen(PORT, () => {
    console.log('Сервер запущен на порту 3000');
})