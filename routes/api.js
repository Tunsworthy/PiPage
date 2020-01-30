'use strict';

module.exports = function(app) {

app.get('/api/status', function(req,res){
    console.log(req.query)
    var gpio = req.query.gpio
    console.log(gpio)
    status = (rpio.read(gpio) ? 'high' : 'low');
    res.json(status)

});

}

