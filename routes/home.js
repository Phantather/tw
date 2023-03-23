const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const DOMAIN_PATH = require('../configs/variables');
const router = Router()


router.get('/', async (req, res) => {
    let response = null
    try {
        await Promise.all([ API.get('/global'), API.get('/founders-page?populate=deep')])
            .then((res) => response = {global: res[0].data, founders: res[1].data})
    } catch (err) {
        console.log(err)
    }

    res.render('./pages/home/index.ejs', {
        data: response,
        domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length)
    });
});


module.exports = router