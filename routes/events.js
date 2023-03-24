const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const DOMAIN_PATH = require("../configs/variables");
const router = Router()


router.get('/events', async (req, res) => {
    let response = null
    try {
        await API.get('/events?populate=deep')
            .then(({data}) => response = data)

    } catch (err) {
        console.log(err)
    }

    res.render('pages/events/index.ejs', {
        data: {
            response,
            domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length)
        },

    }); // Переход на страницу "Контакты"
});


module.exports = router