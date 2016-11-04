var express = require('express')
var app = express();
var path = require('path');
var port  = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});


// app.use(function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });


//PORT LISTENER
//=========================================
app.listen(port, function() {
    console.log('=======================');
    console.log('RUNNING on PORT ' + port);
    console.log('=======================');
});
