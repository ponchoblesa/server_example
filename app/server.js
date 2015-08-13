var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    config = require('../config')(),
    log = require('./server-logger')(),
    models = require('./models'),
    handlers = require('./handlers'),
    routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

exports.start = function () {
  var router = routes.setup(express.Router(), handlers),
      port = process.env.PORT || config.port,
      host = process.env.IP || config.host;

  app.use(express.static('public'));
  app.use(router);

  app.listen(port, host, function() {
    log.info('Express server listening on port '+ port +' in '+ app.settings.env +' mode');
  });
};

exports.app = app;
