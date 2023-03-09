const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/mission', (req, res) => {
    res.render('pages/mission/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router