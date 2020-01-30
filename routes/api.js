'use strict';

module.exports = function(app) {

app.get('/api/status', function(req,res){

    var gpio = req.query.gpio

    status = rpio.read(gpio);
    res.json(status)

});

}

