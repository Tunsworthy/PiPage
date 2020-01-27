var express = require('express');
var router = express.Router();
var rpio = require('rpio');
var sensor = require("node-dht-sensor");

/* GET home page. */
router.get('/', function(req, res, next) {
  temphum();
  res.render('index', {title: 'Pi Page',messages: req.flash('info'),error: req.flash('error') });
});

router.all('/relay/:gpio/:status', function(req, res,next){
    rpio.init({mapping: 'gpio'});
    //change the Params into int
    var action = {};
        action.status = (+req.params.status);
        action.gpio = (+req.params.gpio);
    console.log(action);
    rpio.open(action.gpio, rpio.OUTPUT, rpio.LOW);

    //Send action (on or off)
    rpio.write(action.gpio,action.status);
    console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
    
    //If Power on 
        if (action.status === 0) {
            rpio.sleep(1);
            rpio.write(action.gpio,(action.status + 1));
            console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
            req.flash('info', 'Power on sent');
            res.redirect(301, '/');
        };
     //If power off
        if (action.status === 1) {
            rpio.sleep(10);
            rpio.write(action.gpio,(action.status - 1));
            console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
            req.flash('info', 'Power Off sent');
            res.redirect(301, '/');    
        };

});

module.exports = router;


function temphum(tempoutput){
    sensor.read(11, 4, function(err,tempoutput,temperature,humidity) {
        if (!err) {
            tempoutput.temperature = temperature
            tempoutput.humidity = humidity
        return tempoutput
        console.log(tempoutput)
            //console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
        }
    });
    return tempoutput
}