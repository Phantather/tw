const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/founders', (req, res) => {
    res.render('pages/founders/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router