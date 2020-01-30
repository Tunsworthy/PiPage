var express = require('express');
  app = express();
  createError = require('http-errors');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');
  session = require('express-session');
  flash = require('express-flash');
  rpio = require('rpio');
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;
  sensor = require("node-dht-sensor");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api');

var sessionStore = new session.MemoryStore;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

app.use(flash());
indexRouter(app);
usersRouter(app);
api(ap);

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// prepare server
//app.use('/api', api); // redirect API calls
//app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);
console.log('Applciation started' + port)
//module.exports = app;
