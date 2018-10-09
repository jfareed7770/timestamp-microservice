var express = require("express");
var app = express();

var months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var dayNames = {
				0: "Sun",
				1: "Mon",
				2: "Tues",
				3: "Wed",
				4: "Thurs",
				5: "Fri",
				6: "Sat"
			};

var locale = "en-us";

app.get("/", function(req, res) {
  res.send('<p>Example usage:</p><code>http://localhost:8080/December%2015,%202015</code><br><code>http://localhost:8080/1450137600</code>');
});

app.get("/:date_string([0-9]*)", function(req, res){
  var dateJson = {"unix":null, "utc":null};
  var date = new Date(req.params.date_string);
  var month = date.toLocaleString(locale,{month:"short"});
  dateJson.unix = date.getTime();
  dateJson.utc = dayNames[date.getDay()]+ ", "+ date.getUTCDate() + " " + month + " "+ date.getFullYear();
  res.send(dateJson);
});

app.listen(8080);
