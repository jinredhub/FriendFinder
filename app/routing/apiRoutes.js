var path = require("path");


var surveyArray = require("../data/friends.js");


module.exports = function(app){
	app.get("/api/friends", function(req, res) {
	  res.json(surveyArray.surveyArray);
	});

	app.post("/api/friends", function(req, res) {
	  // logic here
	  console.log(req.body);
	});
}