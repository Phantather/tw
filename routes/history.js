const { Router } = require('express');
const request = require('request');
const API = require('../configs/axios');
const router = Router();
const i18n = require('../i18n');

router.get('/history', async (req, res) => {
  let response = null;
  let lng = req.getLocale();
  try {
    await API.get(`/history-page?locale=${lng}&populate=deep`).then(
      ({ data }) => (response = data)
    );
  } catch (err) {
    console.log(err);
  }

  res.render('./pages/history/index.ejs', {
    data: response,
    SEO: {
      title: response?.data.HistorySEO.metaTitle,
      description: response?.data.HistorySEO.metaDescription,
      image: response?.data.HistorySEO.metaImage.url,
      keywords: response?.data.HistorySEO.keywords,
      structuredData: response?.data.HistorySEO.structuredData,
      canonicalURL: response?.data.HistorySEO.canonicalURL,
      viewport: response?.data.HistorySEO.metaViewport,
    }
  });
});

module.exports = router;
