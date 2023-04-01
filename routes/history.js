const { Router } = require('express');
const request = require('request');
const API = require('../configs/axios');
const router = Router();
const i18n = require('../i18n');

router.get('/history', async (req, res) => {
  let response = null;
  let lng = req.getLocale();
  try {
    await API.get(`/history-page?locale=${lng}`).then(
      ({ data }) => (response = data)
    );
  } catch (err) {
    console.log(err);
  }

  res.render('./pages/history/index.ejs', {
    data: response,
  });
});

module.exports = router;
