var express     = require('express');
var app         = express();
var env         = require('node-env-file');
var bodyParser  = require('body-parser');
var mongoose    = require ('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

/**
 * Load vars from .env files
 * Any .env vars are accessible trough the "process.env.SOME_VAR"
 */
env(__dirname + '/../.env', { overwrite: true });

/**
 * Init th database connection
 */
mongoose.connect('mongodb://mongo/' + process.env.MONGODB_DATABASE);

/**
 * Routes
 */
var routes = {
    "default": "/",
    "static":  "/static"
};

/**
 * Home
 */
app.get('/', function (req, res) {
    res.send('HELLO WORLD !');
});


/**
 * Serve static files
 */
app.use(routes.static, express.static('public'));

/**
 * Handle wrong url
 */
app.use(function(req, res) {
    res.send('ERROR 404');
});

/**
 * Start server
 */
app.listen(process.env.NODE_INTERNAL_PORT, function () {
    console.log('Application started at http://localhost:' + process.env.NODE_EXTERNAL_PORT + ' !');
    console.log('Environment is : [' + process.env.NODE_ENV + ']');
});
