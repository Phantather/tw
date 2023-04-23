const {Router} = require('express')
const request = require("request");
const API = require("../configs/axios");
const router = Router()




router.get('/projects', async (req, res) => {
    let response = null;
    let lng = req.getLocale();
    try {
        await API.get(`/projects-page?locale=${lng}&populate=deep`).then(
            ({ data }) => (response = data)
        );
    } catch (err) {
        console.log(err);
    }
    res.render('pages/projects/index.ejs', {
        data: response,
    });
});




module.exports = router