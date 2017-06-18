'use strict';

var mongoose = require('mongoose'),
    Hotels = require('../models/hotelModel'),
    Hotel = mongoose.model('Hotels');

/** List all hotel */
exports.list_all_hotels = function(req, res) {
    Hotel.find({}, function(err, hotel) {
        if (err)
            res.send(err);

        res.json(hotel);
    });
};

/** Create new hotel */
exports.create_an_hotel = function(req, res) {
    var new_hotel = new Hotel(req.body);

    new_hotel.save(function(err, hotel) {
        if (err)
            res.send(err);

        res.json(hotel);
    });
};

/** Read given hotel */
exports.read_an_hotel = function(req, res) {
    Hotel.findById(req.params.hotelId, function(err, hotel) {
        if (err)
            res.send(err);

        res.json(hotel);
    });
};

/** Update given hotel */
exports.update_an_hotel = function(req, res) {
    Hotel.findOneAndUpdate(req.params.hotelId, req.body, { new: false }, function(err, hotel) {
        if (err)
            res.send(err);

        res.json(hotel);
    });
};

/** Delete given hotel */
exports.delete_an_hotel = function(req, res) {
    Hotel.remove({
        _id: req.params.hotelId
    }, function(err, hotel) {
        if (err)
            res.send(err);

        res.json({ message: 'Hotel successfully deleted' });
    });
};
