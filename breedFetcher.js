const needle = require('needle');

needle.get('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (err, response, body) => {
  if (err) console.log(err);
  console.log(response.statusCode);
  console.log(body);
});

