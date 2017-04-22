
//Dependencies
var express = require('express'),
app = express(),

port = process.env.PORT || 3000;

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order=require('./api/models/order'),
  Customer = require('./api/models/customer'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Neondb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/neonRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
