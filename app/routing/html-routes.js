
var path = require('path');

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

//if no matching route or if they are at home page
app.use(function(req, res) {
    res.sendFile(path.join(__dirname + 'app/public/home.html'));
});
