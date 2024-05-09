const needle = require('needle');
const args = process.argv.slice(2);

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, response, body) => {
  if (err) {
    console.log('There was a communication error!');
    return;
  }
  if (response.body === 'INVALID_DATA') {
    console.log('There was an error.');
    return;
  }
  console.log(body[0].description);
});