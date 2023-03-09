const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/contact', (req, res) => {
    res.render('pages/contact/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router



