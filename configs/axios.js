const axios = require('axios');
require('dotenv').config();
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Set config defaults when creating the instance
const API = axios.create({
  baseURL: process.env.DOMAIN + '/api',
});

// Alter defaults after instance has been created
// API.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// export
module.exports = API;
