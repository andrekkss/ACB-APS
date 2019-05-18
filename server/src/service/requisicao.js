const request = require('request');
const Clima = require('../models/clima');

const apikey = "fde01de895b2bcfcf4caa5183e034456";

async function requisicao (id, cidade){
    await request(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${apikey}` ,
        function (error, response, body) {
            const resp = JSON.parse(body);
            const data = {
                Cidade: cidade,
                Cordenadas: resp.coord,
                Clima: resp.weather[0].main,
                Descricao: resp.weather[0].description,
                temperatura: resp.main.temp,
                pressao: resp.main.pressure,
                tempMin: resp.main.temp_min,
                tempMax: resp.main.temp_max,
                cidade: resp.sys.name,
                cidade: resp.sys.country
            }
            Clima.create(data);
        }
    );
}

module.exports = requisicao;