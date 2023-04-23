const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const router = Router()


router.get('/mission', async (req, res) => {
    let response = null;
    let lng = req.getLocale();
    try {
        await API.get(`/mission-and-goals-page?locale=${lng}&populate=deep`).then(
            ({ data }) => (response = data)
        );
    } catch (err) {
        console.log(err);
    }
    res.render('pages/mission/index.ejs', {
        data: response,
    }); // Переход на страницу "Контакты"
});


module.exports = router