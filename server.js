// Dependencies
var express = require("express");
var path = require("path");



// Express configuration
var app = express();

var PORT = process.env.PORT || 8081;

// app.get("/", function(req, res) {
//     res.send("Testing")
// });

// Using express for routing
require("./app/routing/htmlRoutes.js")(app);

// 
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

