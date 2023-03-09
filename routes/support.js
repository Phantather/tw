const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/support', (req, res) => {
    res.render('pages/support/index.ejs'); // Переход на страницу "Контакты"
});



module.exports = router