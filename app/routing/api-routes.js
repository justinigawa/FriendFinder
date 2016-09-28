var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(tables);
    });

    // Create New Characters - takes in JSON input
    app.post('/api/friends', function(req, res) {
        friends.push(req.body);
        res.json(true);
    });
};
