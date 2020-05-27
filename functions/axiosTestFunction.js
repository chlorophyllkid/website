const axios = require('axios');

// const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

exports.handler = async (event, context, callback) => {
  try {
    const response = await axios.get(API_ENDPOINT);
    callback(null, { statusCode: 200, body: response });
  } catch (error) {
    callback(null, { statusCode: 422, body: String(error) });
  }
};
