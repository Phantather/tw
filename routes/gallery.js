const {Router} = require('express')
const request = require("request");
const router = Router()


router.get('/gallery', (req, res) => {
    res.render('pages/gallery/index.ejs'); // Переход на страницу "Контакты"
});


module.exports = router