'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HotelSchema = new Schema({
    name: {
        type: String,
        Required: 'Hotel name missing'
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    roomQuantity: {
        type: Number
    }
});

module.exports = mongoose.model('Hotels', HotelSchema);
