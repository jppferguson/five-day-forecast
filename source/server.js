var express = require('express');
var app = express();
var path = require('path');
var root = __dirname + '/../';

app.use(express.static(path.join(root, 'dist')));

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port != "number") ? port : 3000;

if(!module.parent){ app.listen(port); }

console.log("Application started. Listening on port:" + port);
