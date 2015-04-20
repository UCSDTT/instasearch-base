var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var app = express();

Instagram = require('instagram-node-lib');
Instagram.set('client_id', '2ea17f7f02bf4e0e81e85abe8f3d3575');
Instagram.set('client_secret', '08c9541636ee4508a620f28da1bf97bf');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware to automatically parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware that calls ./routes/index.js whenever we hit the '/' endpoint
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// set port to number provided from user or defaults to 3000
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
