const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3bc79085a564c0c7e0aa515070225edb/' + latitude + ',' + longitude +'?units=si'
    request({ url, json: true}, (error,  { body } ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. Temperatur high: ' + body.daily.data[0].temperatureHigh + ' Tempratur low: ' + body.daily.data[0].temperatureLow)
            // callback(undefined, {
            //     summary: body.daily.data[0].summary,
            //     temperature: body.currently.temperature,
            //     precipProbability: body.currently.precipProbability
            // })
        }
    })
}

module.exports = forecast