var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  env         = require('node-env-file'),
  mongoose = require('mongoose'),
  Task = require('./hotelModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/' + process.env.MONGODB_DATABASE);

/**
 * Load vars from .env files
 * Any .env vars are accessible trough the "process.env.SOME_VAR"
 */
env(__dirname + '/../.env', { overwrite: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./hotelRoutes');
routes(app);

/**
 * Start server
 */
app.listen(process.env.NODE_INTERNAL_PORT, function () {
    console.log('Application started at http://localhost:' + process.env.NODE_EXTERNAL_PORT + ' !');
    console.log('Environment is : [' + process.env.NODE_ENV + ']');
});
