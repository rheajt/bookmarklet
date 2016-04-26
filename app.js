var express = require('express'),
    path = require('path');

//var routes = require('./routes/index');

var app = express();
var port = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/:pagePath', function(req, res) {
  res.render(req.params.pagePath);
});

app.listen(port, function() {
  console.log('listening for bookmarklets on port ' + port + '...');
});
