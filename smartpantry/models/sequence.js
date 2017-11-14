var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sequenceSchema = new Schema({
  maxUserId: {type: Number},
  maxPantryId: {type: Number}
});

module.exports = mongoose.model('Sequence', sequenceSchema);
