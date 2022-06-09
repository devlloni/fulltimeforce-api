const axios = require('axios');
require('dotenv').config();

const axiosClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    },
    OAuth: process.env.github_personal_token,
});

module.exports = axiosClient;