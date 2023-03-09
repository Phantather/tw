const {Router} = require('express')
const axios = require('axios')
const router = Router()


router.get('/', async (req, res) => {
    let response = null
    try {
        await axios.get('https://fakestoreapi.com/users')
            .then(({data}) => response = data)

    } catch (err) {
        console.log(err)
    }

    // console.log(res)

    res.render('pages/home/index.ejs', {
        data: response
    }); // Переход на главную страницу
});


module.exports = router