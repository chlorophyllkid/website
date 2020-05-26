const axios = require('axios');

const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

exports.handler = async () => axios
  .get(API_ENDPOINT)
  .then((response) => ({ statusCode: 200, body: response.data }))
  .catch((error) => ({ statusCode: 422, body: error }));
