const reqwest = require('reqwest');

const API_ENDPOINT = 'https://icanhazdadjoke.com/';

exports.handler = async (event, context, callback) => reqwest({
  url: API_ENDPOINT,
  method: 'get',
  type: 'json',
  error: (error) => callback({ statusCode: 422, body: String(error) }),
  success: (response) => callback({ statusCode: 200, body: response.joke }),
});
