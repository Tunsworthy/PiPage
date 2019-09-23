'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Checkin = new Schema({
  Location_Name: {
    type: String,
    required: 'Location_Name'
  },
  Location_Cor: {
    type: String,
  },
  Checkin_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Checkin', Checkinchema);