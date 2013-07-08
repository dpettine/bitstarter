var express = require('express');

var fs = require('fs');

var infile = "index.html";

var enc = "utf-8";

var app = express.createServer(express.logger());

var buffer = new Buffer(fs.readFileSync(infile,enc),enc);

app.get('/', function(request, response) {
  response.send(buffer.toString(enc));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
