var express = require('express');
var router = express.Router();
var rpio = require('rpio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Pi Page', expressFlash: req.flash('success'), sessionFlash: res.locals.sessionFlash });
});

router.all('/indexflash/:gpio/:status', function(req, res,next){
    console.log(req.params)
    //var data = {};
    //data.action = "write";
    //data.gpio = req.params.gpio;
    //data.status = req.params.status;
    //	function(e){
    //		rpio.write(req.data.gpio, + req.data.status);

    //	}
    //console.log(data)
    req.flash('success', 'Index Flash');
    res.redirect(301, '/');
});

module.exports = router;

/*
$(function(){               
    $('.gpio-button').on('click', function(e,req,res){       
            var data = {};
            data.action = "write";
            data.gpio = $(this).data("gpio");
            data.status = $(this).data("status");
            console.log(data);
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/ajax',                       
                error: function(data) {
                    alert("Error");
                },
                succes: function(data) {
                    alert("succes");
                }
        });
    });             
});

/* GET ajax response. 
module.exports = function(req, res) {
    if (req.body.hasOwnProperty('action')) {
        switch(req.body.action) {
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
*/