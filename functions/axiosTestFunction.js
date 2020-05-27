const axios = require('axios');

// const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

exports.handler = async (event, context, callback) => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: res.data.title,
      });
    })
    .catch((err) => {
      callback(err);
    });
};
