
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 5000;


// Sets up the Express app to handle data parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.text());
app.use(bodyparser.json({
    type: 'application/vnd.api+json'
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT);
});
