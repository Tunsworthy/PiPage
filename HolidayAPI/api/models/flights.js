'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Flights = new Schema({
  FlightNo: {
    type: String,
    required: 'FlightNo'
  },
  BookingNo: {
    type: String,
    required: 'BookingNo'
  },
  Carrier: {
    type: String,
    required: 'Carrier'
  },
  DAiport: {
    type: String,
    min: 3,
    max: 3,
    required : 'DAiport'
  },
  AAiport: {
    type: String,
    min: 3,
    max: 3,
    required : 'AAiport'
  },
  departure_date: {
    type: date,
  },
  Arrival_date: {
    type: date,
  },
  Checkin_status: {
    type: Boolean,
    default: Date.now
  },
  Checkin_date: {
    type: date,
  },
});

module.exports = mongoose.model('Flights', flightsschema);
