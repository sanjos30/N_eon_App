'use strict';
//Dependencies
var mongoose = require('mongoose'),

//Schema
Order = mongoose.model('Orders'),
Customer = mongoose.model('Customers');

//Create a customer
exports.create_a_customer = function(req, res) {
  var new_cust = new Customer(req.body);
  new_cust.save(function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

//Get all customers
exports.list_all_customers = function(req, res) {
  Customer.find({}, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};


//Get a customer
exports.read_a_customer = function(req, res) {
  Customer.findById(req.params.customerid, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

//update a customer
exports.update_a_customer = function(req, res) {
  Customer.findOneAndUpdate({'_id': req.params.customerid}, req.body, {new: true}, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

//delete a customer
exports.delete_a_customer = function(req, res) {
 Customer.remove({
    _id: req.params.customerid
  }, function(err, customer) {
    if (err)
     res.send(err);
    res.json({ message: 'Customer successfully deleted' });
  });
};


//create an order
exports.create_an_order = function(req, res) {
  var new_order= new Order(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


//get all orders
exports.get_all_orders = function(req, res) {
  Order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


//Get an order
exports.get_an_order = function(req, res) {
  Order.findById(req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

//update an order
exports.update_an_order = function(req, res) {
  Order.findOneAndUpdate({'_id': req.params.orderid}, req.body, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

//delete an order
exports.delete_an_order = function(req, res) {
 Order.remove({
    _id: req.params.orderid
  }, function(err, order) {
    if (err)
     res.send(err);
    res.json({ message: 'Order successfully deleted' });
  });
};

//Get customer orders
exports.get_customer_orders = function(req, res) {
  Order.find({'customerid': req.params.customerid}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.list_an_order_for_a_customer = function(req, res) {
  Order.findById(req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
     res.json(order);
  });
};

exports.read_a_customer_order = function(req, res) {
  Order.findById(req.params.orderid, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


/*exports.create_a_customer_order = function(req, res) {
  Customer.findById(req.params.customerid, function(err, customer) {
    if (err)
      res.send(err);
    var new_order = new Order(req.body);
    customer.order_list.push(new_order);
    customer.save();
    res.json(customer);
  });
};



*/