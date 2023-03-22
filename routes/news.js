const { Router } = require('express');
const request = require('request');
const API = require('../configs/axios');
const DOMAIN_PATH = require('../configs/variables');
const router = Router();

router.get('/news', async (req, res) => {
  let response = null;
  try {
    await API.get('/news?populate=PreviewImage').then(
      ({ data }) => (response = data)
    );
  } catch (err) {
    console.log(err);
  }

  let topNewsOne = response.data.sort((a, b) => a.Date - b.Date)[0];

  let rowedNews = response.data
    .filter((el) => el.Date !== topNewsOne.Date)
    .map(
      (el) =>
        (el = {
          ...el,
          Date: new Date(el.Date).toLocaleString('ru-ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        })
    );

  res.render('pages/news/index.ejs', {
    data: {
      topNewsOne,
      rowedNews,
      domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length),
    },
  }); // Переход на страницу "Контакты"
});

module.exports = router;
