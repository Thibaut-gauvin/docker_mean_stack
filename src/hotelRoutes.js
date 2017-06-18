'use strict';

module.exports = function(app) {
    var hotel = require('./hotelController');

    app.route('/hotels')
        /** List all hotel */
        .get(function(req, res){
            hotel.list_all_hotels(req, res)
        })

        /** Create new hotel */
        .post(function(req, res){
            hotel.create_an_hotel(req, res)
        })
    ;

    app.route('/hotels/:hotelId')
        /** Read given hotel */
        .get(function(req, res){
            hotel.read_an_hotel(req, res)
        })

        /** Update given hotel */
        .put(function(req, res){
            hotel.update_an_hotel(req, res)
        })


        /** Delete given hotel */
        .delete(function(req, res){
            hotel.delete_an_hotel(req, res)
        })
    ;
};
