const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/news', (req, res) => {
    res.render('pages/news/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router


