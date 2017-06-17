var express     = require('express'),
    app           = express(),
    env           = require('node-env-file'),
    mongoose      = require('mongoose'),
    Task          = require('./hotelModel'),
    bodyParser    = require('body-parser');

/**
 * Load vars from .env files
 * Any .env vars are accessible trough the "process.env.SOME_VAR"
 */
env(__dirname + '/../.env', { overwrite: true });

/**
 * Init th database connection
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+ process.env.MONGODB_USER + ':' + process.env.MONGODB_PASS + '@mongo:' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DATABASE);

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

module.exports = app;
module.exports = mongoose;
