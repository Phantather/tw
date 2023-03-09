const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/history', (req, res) => {
    res.render('pages/history/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router