var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var userSchema = new Schema({
  //id: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  //pantries: [{type: Schema.Types.ObjectId, ref: pantrySchema}]
});

// var pantrySchema = new Schema({
//   id: {type: String, required: true},
//       name: {type: String, required: true},
//       items : [{type: Schema.Types.ObjectId, ref: itemSchema}]
// });
//
// var itemSchema = new Schema({
//     barcode : {type: String, required: true},
//     brand : {type: String, required: false},
//     expiration : {type: Date, required: false},
//     name : {type: String, required: true},
//     quantity : {type: String, required: true},
//     shopping_list : {type: Boolean, required: true},
//     shopping_list_quantity : {type: String, required: false},
//   })

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
