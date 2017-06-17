'use strict';
module.exports = function(app) {
  var hotel = require('./hotelController');

  app.route('/hotels')
    .get(hotel.list_all_hotels)
    .post(function(req, res){
  hotel.create_an_hotel
});

  app.route('/hotels/:hotelId')
    .get(hotel.read_an_hotel)
    .put(hotel.update_an_hotel)
    .delete(hotel.delete_an_hotel);
};
