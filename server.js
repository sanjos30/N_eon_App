
//Dependencies
var express = require('express'),
app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order=require('./api/models/order'),
  Customer = require('./api/models/customer'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/Neondb';

// Connect to the db
mongoose.connect(mongoUri, function(err, db) {
  if(err) { return console.dir(err); }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/neonRoutes');
routes(app);
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);