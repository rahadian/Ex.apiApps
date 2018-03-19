var cors = require('cors');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes=require('./routes/index');
var index = require('./routes/index');
// var users = require('./routes/users');
// var user = require('./routes/user');
// var Tasks = require('./routes/Tasks');

var Users = require('./routes/Users');
var City = require('./routes/City');
var State = require('./routes/State');
// var Recent = require('./routes/Recent');
// var Infografis = require('./routes/Infografis');
// var Bpilihan = require('./routes/Bpilihan');
// var Popular = require('./routes/Popular');
// var Video = require('./routes/Video');
// var Photo = require('./routes/Photo');
// var Profile = require('./routes/Profile');
// var Kolom = require('./routes/Kolom');
// var Kategori = require('./routes/Kategori');
//var Cors = require('./routes/Cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.set('view engine','ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',routes);

app.use('/Users',Users);
app.use('/City',City);
app.use('/State',State);
// app.use('/Tasks', Tasks);
// app.use('/users', users);
// app.use('/user', user);
// app.use('/Recent',Recent);
// app.use('/Infografis',Infografis);
// app.use('/Bpilihan',Bpilihan);
// app.use('/Popular',Popular);
// app.use('/Video',Video);
// app.use('/Photo',Photo);
// app.use('/Profile',Profile);
// app.use('/Kolom',Kolom);
// app.use('/Kategori',Kategori);
//app.use('/Cors',Cors);

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//app.all('*', function(req, res, next) {
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header("Access-Control-Allow-Headers", "X-Requested-With");
//       res.header('Access-Control-Allow-Headers', 'Content-Type');
//       next();
//});
app.options('*', cors()); 

//app.all('/*', function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
//    next();
//});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
//});

app.use(function(req, res, next) {
  var allowedOrigins = ['http://127.0.0.1:1994', 'http://localhost:1994'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:1337');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});






module.exports = app;
