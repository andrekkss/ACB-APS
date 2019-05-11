const request = require('request');
const Clima = require('../models/clima');

const apikey = "fde01de895b2bcfcf4caa5183e034456";
var cidade = "Madrid"

async function requisicao (){
    await request(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${apikey}` ,
        function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            const resp = JSON.parse(body);
            const data = {
                Cordenadas: resp.coord,
                Clima: resp.weather[0].description,
                temperatura: resp.main.temp,
                pressao: resp.main.pressure,
                tempMin: resp.main.temp_min,
                tempMax: resp.main.temp_max,
                cidade: resp.sys.name,
                cidade: resp.sys.country
            }
            console.log('tesdatat:', data);
            Clima.create(data);
        }
    );
    console.log(` test - ${JSON.stringify(data)}`);
    return data;
}

module.exports = requisicao;