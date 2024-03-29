const { Router } = require('express');
const request = require('request');
const API = require('../configs/axios');
const DOMAIN_PATH = require('../configs/variables');
const router = Router();

router.get('/gallery', async (req, res) => {
  let response = null;
  let lng = req.getLocale();
  try {
    await API.get(`/gallery-page?locale=${lng}&populate=deep`).then(
      ({ data }) => (response = data)
    );
  } catch (err) {
    console.log(err);
  }

  res.render('./pages/gallery/index.ejs', {
    data: response,
    domain: DOMAIN_PATH.slice(0, DOMAIN_PATH.length),
    SEO: {
      title: response?.data.GalleriesSEO.metaTitle,
      description: response?.data.GalleriesSEO.metaDescription,
      image: response?.data.GalleriesSEO.metaImage.url,
      keywords: response?.data.GalleriesSEO.keywords,
      structuredData: response?.data.GalleriesSEO.structuredData,
      canonicalURL: response?.data.GalleriesSEO.canonicalURL,
      viewport: response?.data.GalleriesSEO.metaViewport,
    }
  }); // Переход на страницу "Контакты"
});

module.exports = router;
