const reqwest = require('reqwest');

const API_ENDPOINT = 'https://icanhazdadjoke.com/';

exports.handler = async (event, context, callback) => reqwest({
  url: API_ENDPOINT,
  method: 'get',
  type: 'json',
  headers: { Accept: 'application/json' },
  error: (error) => callback(null, { statusCode: 422, body: String(error) }),
  success: (response) => callback(null, { statusCode: 200, body: response.joke }),
});
