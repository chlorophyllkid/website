const fetch = require('node-fetch');

// const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const API_ENDPOINT = new URL('https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab');

exports.handler = async (event, context, callback) => {

  return fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => callback(null, {
      statusCode: 200,
      body: data,
    }))
    .catch((error) => callback(null, { statusCode: 422, body: String(error) }));
};
