'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
  name: {
    type: String,
    Required: 'Hotel name missing'
  },
  adress: {
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
