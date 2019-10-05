var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        console.log(friends);
        var selectedFriend = friends[0];
        var biggestScore = 100;
        
        for (i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            for (j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(req.body.scores[j]) - friends[i].scores[j]);
            }
            console.log(totalDifference);
            if (totalDifference <= biggestScore) {
                biggestScore = totalDifference;
                selectedFriend = friends[i];
            }
        }
        
        friends.push(req.body)
        res.json(selectedFriend);
        
    });


};