// Dependencies
var fs = require("fs");
var express = require("express");
var path = require("path");
// Setting our express app
var app = express();
// Set our port to 8000
var PORT = 8000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
// Starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});