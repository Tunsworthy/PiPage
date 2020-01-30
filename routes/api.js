'use strict';

module.exports = function(app) {

app.get('/api/status', function(req,res){
    var status
    status = (rpio.read(req.params.gpio) ? 'high' : 'low');
    res.json(status)

});

}

