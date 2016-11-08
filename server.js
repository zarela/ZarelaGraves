var express = require('express')
var app = express();
var path = require('path');
var port  = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

//This allows $locationProvider to work without #
app.all('/*', function(req, res, next) {
  res.sendFile('/public/index.html', { root: __dirname });
});

//PORT LISTENER
//=========================================
app.listen(port, function() {
    console.log('=======================');
    console.log('RUNNING on PORT ' + port);
    console.log('=======================');
});
