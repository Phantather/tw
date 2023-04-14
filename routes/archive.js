const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const DOMAIN_PATH = require("../configs/variables");
const router = Router()


router.get('/archive', async (req, res) => {
    let response = null;
    let lng = req.getLocale();
    let dateQuery = req.query.date;
    let query = !!dateQuery ? `&filters[Date]=${dateQuery}` : '';
    try {
        await API.get(`/events?populate=deep&locale=${lng}${qury}`).then(
            ({ data }) => (response = data)
        );
    } catch (err) {
        console.log(err);
    }

    console.log(!!dateQuery, dateQuery, query);

    res.render('pages/archive/index.ejs', {
        data: {
            response,
            domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length),
        },
    }); // Переход на страницу "Контакты"
});

module.exports = router