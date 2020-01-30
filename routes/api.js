var express = require('express');
var router = express.Router();
var rpio = require('rpio');
var sensor = require("node-dht-sensor");


router.get('/:gpio', function(req,res){
    var status
    status = (rpio.read(req.params.gpio) ? 'high' : 'low');
    res.json(status)

});

module.exports = router;

/*
var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

*/
