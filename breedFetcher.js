const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      callback('There was an error.');
      return;
    }
    if (body[0] === undefined) {
      callback('There was an error.');
      return;
    }
    callback(null, body[0].description);
  });
};

module.exports = { fetchBreedDescription };