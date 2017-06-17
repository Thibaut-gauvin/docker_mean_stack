'use strict';

module.exports = function(app) {
    var hotel = require('./hotelController');

    app.route('/hotels')
        .get(function(req, res){
            hotel.list_all_hotels(req, res)
        })
        .post(function(req, res){
            hotel.create_an_hotel(req, res)
        })
    ;

    app.route('/hotels/:hotelId')
        .get(function(req, res){
            hotel.read_an_hotel(req, res)
        })
        .put(function(req, res){
            hotel.update_an_hotel(req, res)
        })
        .delete(function(req, res){
            hotel.delete_an_hotel(req, res)
        })
    ;
};
