const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bea2022cb81dd268c0bf379266435308&query=' + latitude + ',' + longitude

    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if(body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, {
                weatherDescription: body.current.weather_descriptions[0],
                currentTemperature: body.current.temperature,
                humidity: body.current.humidity,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast