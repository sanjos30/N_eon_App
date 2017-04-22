
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create an order schema
var orderSchema = new Schema({
  orderid: String,
  customerid: {
    type: Schema.ObjectId,
    required: true,
    ref: 'Customer'
  },
  orderamount: Number,
  deliveryinstructions: String,
  expressdelivery: Boolean,
  deliveryman: String,
  pickupaddress: String,
  dropoffaddress: String,
  order_date: Date,
  pickup_date: Date,
  dropoff_date: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var Order = mongoose.model('Orders', orderSchema);

// make this available to our users in our Node applications
module.exports = Order;