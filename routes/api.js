'use strict';

module.exports = function(app) {

app.get('/api/status', function(req,res){
    console.log(req.query)
    var status = req.query
    console.log(status)
    status = (rpio.read(req.params.gpio) ? 'high' : 'low');
    res.json(status)

});

}

