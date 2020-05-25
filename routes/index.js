'use strict';

module.exports = function(app) {
/* GET home page. */
app.get('/', function(req, res, next) {
  temphum()
    .then((reading) => {
        res.render('index', {title: 'Pi Page',messages: req.flash('info'),error: req.flash('error'),temperature: reading.temperature,humidity: reading.humidity });
    })
    .catch((error) => console.log(error))  
});

app.all('/relay/', function(req, res,next){
    console.log(req.query)
    rpio.init({mapping: 'gpio'});
    //0 = high
    //1 = low
    //change the Params into int
    var action = {};
        action.status = +req.query.status;
        action.gpio = +req.query.gpio;
    console.log(action)
    rpio.open(action.gpio, rpio.OUTPUT);
    rpio.write(action.gpio,action.status);
    console.log("reading GPIO",rpio.read(action.gpio));
    
    var alert = {}
    if(rpio.read(action.gpio) === rpio.read(action.gpio)){
        alert.type = "success"
        alert.message = "GPIO set correctly"
    }
    if(rpio.read(action.gpio) !== rpio.read(action.gpio)){
        alert.type = "danger"
        alert.message = "GPIO set error"
    }
    res.json(alert)

});

app.get('/temperature',function(req, res,next){
    console.log("temperature",req.query)
temphum()
    .then((reading) =>{
       console.log(reading)
        res.json(reading)
    })
});

}



function temphum(reading){
    return new Promise((resolve,reject) => {
        sensor.read(11, 4, function(err,temperature,humidity) {
        var reading = {}
        reading.temperature = temperature
        reading.humidity = humidity
//console.log(reading)
        resolve(reading);
        })
    })
}