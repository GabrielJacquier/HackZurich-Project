var express = require('express');
var app = express();
var User = require('./data/model/user');
var userController = require('./controller/userController');
var parser = require('body-parser');

app.use(parser());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(request, response) {
  User.find({}, function(err, data) {
    response.send(data);
  });
});

app.post("/api/users", userController.save);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
