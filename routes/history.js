const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const router = Router()


router.get('/history',async (req, res) => {
    let response = null
    try {
        await API.get('/history-page')
            .then(({data}) => response = data)

    } catch (err) {
        console.log(err)
    }

    res.render('pages/history/index.ejs', {
        data: response
    }); // Переход на страницу "Контакты"
});


module.exports = router