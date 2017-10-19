var path = require("path");


var surveyArray = require("../data/friends.js");


module.exports = function(app){
	app.get("/api/friends", function(req, res) {
	  res.json(surveyArray.surveyArray);
	});

	app.post("/api/friends", function(req, res) {
	  // logic here
	  // console.log(req.body.scores);
	  // console.log(surveyArray.surveyArray[0].scores);
	  var currentTotalDifference = 100;
	  var bestMatchIndex = 0;
	  for(var p=0;p<surveyArray.surveyArray.length;p++){
	  	  var totalDifference = 0;
		  for (var i=0;i<req.body.scores.length;i++){
		  	totalDifference+=(Math.abs(parseInt(req.body.scores[i]) - parseInt(surveyArray.surveyArray[p].scores[i])));
		  	console.log(totalDifference);
		  	if(currentTotalDifference >= totalDifference){
		  		currentTotalDifference = totalDifference;
		  		bestMatchIndex = p;
		  	}
		  }
	  }
	  surveyArray.surveyArray.push(req.body);
	  res.json(surveyArray.surveyArray[bestMatchIndex]);

	});
}