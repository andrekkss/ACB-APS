var request = require('request');
var apikey = "fde01de895b2bcfcf4caa5183e034456";
request(`http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=${apikey}` , function (error, response, body) {
  console.log('error:', error); // Mostra um erro caso ocorra.
  console.log(`Bigode: ${error}`); // <------------ esse aqui bigode
  console.log('statusCode:', response && response.statusCode); //Mostra o status de resposta.
  console.log('body:', body); // Mostra o corpo HTML
});
