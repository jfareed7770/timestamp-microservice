var express = require("express");
var app = express();
var moment = require("moment");

app.get("/", function(req, res) {
  res.send('<p>Example usage:</p><code>http://localhost:8080/December%2015,%202015</code><br><code>http://localhost:8080/1450137600</code>');
});

app.get("/:date_string", function(req, res){
  var dateJson = {"unix":null, "utc":null};
  var param = req.params.date_string;
  if(moment(param,["YYYY-MM-DD","MM-DD-YYYY"]).isValid()){
    var date = moment(param);
  }else{
    var date = moment.unix(param);
 }
  if(date.isValid())
  {
    dateJson.unix = date.valueOf();
    dateJson.utc = date.format("ddd, MMM Do YYYY, h:mm:ss a");
    res.send(JSON.stringify(dateJson));
  }else{
    res.send('{"error": "Invalid Date"}');
  }

});

app.listen(8080);
