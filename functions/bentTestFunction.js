const bent = require('bent');

const getJSON = bent('json');
// const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';
const API_ENDPOINT = 'https://icanhazdadjoke.com/';

exports.handler = async (event, context, callback) => {
  try {
    const response = await getJSON(API_ENDPOINT);
    callback(null, { statusCode: 200, body: response.joke });
  } catch (error) {
    callback(null, { statusCode: 422, body: error });
  }
};
