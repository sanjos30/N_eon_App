// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a customer schema
var customerSchema = new Schema({
  customerid: String,
  name: String,
  phone: String,
  email: String,
  address_list: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cateogry: String,
  channel: String,
// order_list: [{
 //   type: Schema.ObjectId,/
//    ref: 'Order'
//  }],
  last_login: Date,
  last_order: Date,
  joined_on: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Customer = mongoose.model('Customers', customerSchema);

// make this available to our users in our Node applications
module.exports = Customer;


/* In your controller;

var User = require("models/User");
var House = require("models/House");
......

User.findById(req.user.id, function(err, user){

    var houseModel = new House();
    houseModel.adresse = "TEST";
    user.houses.push(houseModel);
    user.save();
 });
 */