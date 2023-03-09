const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/archive', (req, res) => {
    res.render('pages/archive/index.ejs'); // Переход на страницу "О нас"
});

module.exports = router