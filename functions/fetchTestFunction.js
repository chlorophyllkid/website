const fetch = require('node-fetch');

const API_ENDPOINT = 'https://icanhazdadjoke.com/';

exports.handler = async (event, context, callback) => fetch(
  API_ENDPOINT,
  { headers: { Accept: 'application/json' } },
)
  .then((response) => response.json())
  .then((data) => callback(null, {
    statusCode: 200,
    body: data.joke,
  }))
  .catch((error) => callback(null, { statusCode: 422, body: String(error) }));
