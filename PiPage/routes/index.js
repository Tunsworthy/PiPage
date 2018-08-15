var express = require('express');
var router = express.Router();
var rpio = require('rpio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Pi Page', expressFlash: req.flash('success'), sessionFlash: res.locals.sessionFlash });
});

router.all('/relay/:gpio/:status', function(req, res,next){
    rpio.init({mapping: 'gpio'});
    //change the Params into int
    var action = {};
        action.status = (+req.params.status);
        action.gpio = (+req.params.gpio);
    console.log(action);
    
    //Send action (on or off)
    rpio.write(action.gpio,action.status);
    console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
    
    //If Power on 
        if (action.status === 0) {
            rpio.sleep(1);
            rpio.write(action.gpio,(action.status + 1));
            console.log('write action ' + (rpio.read(action.gpio) ? 'high' : 'low'));
            req.flash('success', 'Power on sent');
            res.redirect(301, '/');
        };
     //If power off
        if (action.status === 1) {
            req.flash('success', 'Power off sent');
            res.redirect(301, '/');
        };

});

module.exports = router;