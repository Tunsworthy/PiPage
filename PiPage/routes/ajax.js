var rpio = require('rpio');

/* GET ajax response. */
module.exports = function(req, res) {
    if (req.body.hasOwnProperty('action')) {
        switch( req.body.action) {
            case 'write':
                rpio.init({mapping: 'gpio'});
                rpio.open(req.body.gpio, rpio.OUTPUT, + req.body.status);
                rpio.write(req.body.gpio, + req.body.status);
                res.contentType('json');
                res.send({ gpio: req.body.gpio, status: req.body.status });
            break;
        }
      
    }
};