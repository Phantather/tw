const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/colobarators', (req, res) => {
    res.render('pages/colobarators/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router