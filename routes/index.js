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
        action.status = (+req.query.status);
        action.gpio = (+req.query.gpio);
        gpiochange(action);
    if (action.status === 0) {
        req.flash('info', 'Power on sent');
    }
    if (action.status === 1) {
        req.flash('info', 'Power Off');
    }
    console.log(rpio.read(req.query.gpio));
    res.json("data")

});

}

function gpiochange(action){
    rpio.open(action.gpio, rpio.OUTPUT);
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
*/
};


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