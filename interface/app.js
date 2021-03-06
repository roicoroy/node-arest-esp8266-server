// Module
var express = require('express');
var app = express();

// Define port
var port = 3000;

// View engine
app.set('view engine', 'jade');

// Set public folder
app.use(express.static(__dirname + '/public'));

// Serve interface
app.get('/', function(req, res){
  res.render('interface');
});

// Rest
var rest = require("arest")(app);

// WiFi devices
rest.addDevice('http','192.168.0.65');
rest.addDevice('http','192.168.0.74');

// Start server
app.listen(port);
console.log("Listening on port " + port);