const needle = require('needle');
const args = process.argv.slice(2);

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, response, body) => {
  if (err) console.log(err);
  console.log(response.statusCode, response.statusMessage);
  console.log(body[0].description);
});

