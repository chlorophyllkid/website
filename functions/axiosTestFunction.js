const axios = require('axios');

// const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const API_ENDPOINT = new URL('https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab');

exports.handler = async (event, context, callback) => {

  return axios.get(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => callback(null, {
      statusCode: 200,
      body: data,
    }))
    .catch((error) => callback(null, { statusCode: 422, body: String(error) }));
};
