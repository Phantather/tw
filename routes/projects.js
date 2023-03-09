const {Router} = require('express')
const request = require("request");
const router = Router()




router.get('/projects', (req, res) => {
    res.render('pages/projects/index.ejs'); // Переход на страницу "Контакты"
});




module.exports = router