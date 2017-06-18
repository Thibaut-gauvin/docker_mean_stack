module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps : [
        {
            name            : "hotel_service",
            script          : "./src/HotelService/app.js",
            watch           : true,
            ignore_watch    : [
                "node_modules",
                ".data",
                ".git",
                ".idea"
            ],
            env: {
                "NODE_ENV": "dev"
            },
            env_production : {
                "NODE_ENV": "prod"
            }
        }
    ]
};
