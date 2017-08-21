const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=ea7fa175536ec808fbe9e66dba55dea9';

//  ea7fa175536ec808fbe9e66dba55dea9

module.exports = {
    getTemp: function(location){
        var encoded_location = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;

        return axios.get(requestUrl).then(function(response){
            if(response.data.cod && response.data.message){
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        }, function(response){
            throw new Error(response.data.message);
        });
    }
};
