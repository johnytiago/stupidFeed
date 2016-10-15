var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: './server'})
});

app.listen(4000, function () {
  console.log('Example app listening on port http://localhost:4000!');
});
