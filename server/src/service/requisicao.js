    var request = require('request');
    var apikey = "fde01de895b2bcfcf4caa5183e034456";
    var cidade = "Madrid"

    request(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&APPID=${apikey}` ,
    
    function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        }
    );
