const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/events', (req, res) => {
    res.render('pages/events/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router