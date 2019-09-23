'use strict';

var mongoose = require('mongoose'),
  client = mongoose.model('client');



/*Examples
  exports.list_all_events = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.read_a_event = function(req, res) {
  Event.find({HostID: req.params.eventId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_a_event = function(req, res) {


  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};
*/
