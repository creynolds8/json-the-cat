const needle = require('needle');
const args = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback('There was a communication error!');
      return;
    }
    if (response.body === 'INVALID_DATA') {
      callback('There was an error.');
      return;
    }
    callback(body[0].description);
  });
};

module.exports = { fetchBreedDescription };