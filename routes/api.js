'use strict';

module.exports = function(app) {

app.get('/api/status', function(req,res){

    var gpio = req.query.gpio

    status = rpio.read(2);
    res.json(status)

});

}

