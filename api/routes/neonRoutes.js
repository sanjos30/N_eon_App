//'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/neonController.js');
  
  // Customers Routes
  app.route('/customer')
    .get(todoList.list_all_customers)
    .post(todoList.create_a_customer);

  app.route('/customer/:customerid')
  .get(todoList.read_a_customer)
  .put(todoList.update_a_customer)
  .delete(todoList.delete_a_customer);

//Order Routes
  app.route('/order')
    .get(todoList.get_all_orders)
    .post(todoList.create_an_order);

  app.route('/customer/:customerid/order')
    .get(todoList.get_customer_orders);


/*
  // Orders Routes
  app.route('/customer/:customerid/order')
    .get(todoList.list_all_orders_for_a_customer)
    .post(todoList.create_a_customer_order);
*/
};