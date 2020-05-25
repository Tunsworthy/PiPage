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
    
    return new Promise((resolve,reject) => {
        sensor.read(+req.query.gpio, 4, function(err,temperature,humidity) {
            var reading = []
            reading.temperature = temperature
            reading.humidity = humidity
            //console.log(reading)
            resolve(reading);
        })
res.json(reading)
});


}




/*
function gpiochange(action){
    rpio.open(action.gpio, rpio.OUTPUT);
    console.log("GPIO Actions", action)
    //Send action (on or off)
    rpio.write(action.gpio,action.status);
    console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));    
    //If Power on 
       /* if (action.status === 0) {
            action.status = (action.status + 1)
            rpio.sleep(1);
            rpio.write(action.gpio,action.status);
            //console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
            //req.flash('info', 'Power on sent');
            //res.redirect(301, '/');
        };
     //If power off
        if (action.status === 1) {
            rpio.sleep(10);
            rpio.write(action.gpio,(action.status - 1));
            //console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
            //req.flash('info', 'Power Off sent');
            //res.redirect(301, '/');    
        };

};
*/

function temphum(reading){
    return new Promise((resolve,reject) => {
        sensor.read(11, 4, function(err,temperature,humidity) {
            var reading = []
            reading.temperature = temperature
            reading.humidity = humidity
            //console.log(reading)
            resolve(reading);
        })
//Read Past transactions
})
}