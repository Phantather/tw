const { Router } = require('express');
const request = require('request');
const API = require('../configs/axios');
const DOMAIN_PATH = require('../configs/variables');
const router = Router();

router.get(['/', '/founders'], async (req, res) => {
  let response = null;
  let lng = req.getLocale();
  try {
    await API.get(`/founders-page?locale=${lng}&populate=deep`).then(
      ({ data }) => (response = data)
    );
  } catch (err) {
    console.log(err);
  }


  res.render('./pages/founders/index.ejs', {
    data: response,
    domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length),
    SEO: {
      title: response?.data.FoundersSEO.metaTitle,
      description: response?.data.FoundersSEO.metaDescription,
      image: response?.data.FoundersSEO.metaImage.url,
      keywords: response?.data.FoundersSEO.keywords,
      structuredData: response?.data.FoundersSEO.structuredData,
      canonicalURL: response?.data.FoundersSEO.canonicalURL,
      viewport: response?.data.FoundersSEO.metaViewport,
    }
  });
});

module.exports = router;
