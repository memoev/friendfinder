# friendfinder

👥 A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, compare their answers and display the name and picture of the user with the best overall match.

## Value Proposition :dart:
  
Dating application built on `node.js`! This application brings people together by the power or code, directing them to answer a list of questions with a 1-5 system. This data gets stored and processed to find matches based on compability.
  
## Instructions :memo:  
  
- From the landing page you click on `Go to Survey`.
- You will answer a set of 10 questions qualifying them from 1-5.
- Results will get process and a propmt with the closest match will be displayed.
  
## Code Overview :deciduous_tree:

The most import piece of code on this repository resides on the `apiRoutes.js` file. A express post method which handles all routes inside the program, including the block of code that calculates compatibility:
  
```javascript
app.post("/api/friends", function (req, res) {
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
```  

## Prerequisites :computer:

Working web browser (e.g Chrome, Firefox, Safari, Opera, etc.) from the list of browser that support jQuery (https://jquery.com/browser-support/):

* Desktop:
  * Chrome: (Current - 1) and Current
  * Edge: (Current - 1) and Current
  * Firefox: (Current - 1) and Current, ESR
  * Internet Explorer: 9+
  * Safari: (Current - 1) and Current
  * Opera: Current

* Mobile
  * Stock browser on Android 4.0+
  * Safari on iOS 7+

## Deployment :space_invader:

This application has been deployed using [Heroku](https://heroku.com).