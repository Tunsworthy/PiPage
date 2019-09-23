var express = require('express');
	app = express();
	port = 3000;
	zlFetch = require('zl-fetch');
	bodyParser = require('body-parser');


//Routes

// view engine setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/',function(req,res) {
  res.sendFile(__dirname +'/public/map.html');
});


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('Holiday RESTful API server started on: ' + port);