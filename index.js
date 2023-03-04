const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/src'));



// Маршруты
app.get('/', (req, res) => {
    res.render('pages/home/index.ejs'); // Переход на главную страницу
});
//
app.get('/archive', (req, res) => {
    res.render('pages/archive/index.ejs'); // Переход на страницу "О нас"
});

app.get('/events', (req, res) => {
    res.render('pages/events/index.ejs'); // Переход на страницу "Контакты"
});

app.get('/founders', (req, res) => {
    res.render('pages/founders/index.ejs'); // Переход на страницу "Контакты"
});
app.get('/history', (req, res) => {
    res.render('pages/history/index.ejs'); // Переход на страницу "Контакты"
});
app.get('/mission', (req, res) => {
    res.render('pages/mission/index.ejs'); // Переход на страницу "Контакты"
});

app.get('/news', (req, res) => {
    res.render('pages/news/index.ejs'); // Переход на страницу "Контакты"
});

app.get('/gallery', (req, res) => {
    res.render('pages/gallery/index.ejs'); // Переход на страницу "Контакты"
});

app.get('/contact', (req, res) => {
    res.render('pages/contact/index.ejs'); // Переход на страницу "Контакты"
});
//
// // Запуск сервера
app.listen(PORT, () => {
    console.log('Сервер запущен на порту 3000');
})