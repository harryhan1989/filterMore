var express = require('express');

var app = express();
app.use(express.static("demo"));
var server = app.listen(3000, '0.0.0.0', function() {
    console.log('Express server listening on  ' + server.address().address + 'port:' + server.address().port);
});