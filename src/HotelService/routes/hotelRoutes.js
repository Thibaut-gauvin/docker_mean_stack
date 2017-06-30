'use strict';

module.exports = function(app) {
    var hotelCtrl = require('../controllers/hotelController');

    app.route('/hotels')
        /** List all hotel */
        .get(hotelCtrl.list_all_hotels)

        /** Create new hotel */
        .post(hotelCtrl.create_an_hotel)
    ;

    app.route('/hotels/:hotelId')
        /** Read given hotel */
        .get(hotelCtrl.read_an_hotel)

        /** Update given hotel */
        .put(hotelCtrl.update_an_hotel)

        /** Delete given hotel */
        .delete(hotelCtrl.delete_an_hotel)
    ;
};
