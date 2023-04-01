const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const router = Router()
const i18n = require("../i18n");


router.get('/history',async (req, res) => {
    const lang = req.query.lang || req.headers["accept-language"] || "en";
    i18n.setLocale(lang);
    let response = null
    try {
        await API.get('/history-page?locale=ru')
            .then(({data}) => response = data)
    } catch (err) {
        console.log(err)
    }
    const translations = {
        greeting: i18n.__("Hello"),
        goodbye: i18n.__("Goodbye")
    };

    res.render('./pages/history/index.ejs', {
        data: response,
        translations
    });
});


module.exports = router