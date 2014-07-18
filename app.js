var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var twitter = require('twitter');
var Firebase = require('firebase');
var env     = require('node-env-file');
var tweetData;


server.listen(process.env.PORT || 5000);
console.log("Node server started.");
app.use('/', express.static(__dirname + '/public'));


app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
  search = req.query || "";
});



t = new twitter({
  consumer_key: "c6eNELOE5cuIDyXumVzl4bwsm",
  consumer_secret: "Du9PSkr5KNRuS8qVHGJYRprnJyR6AjsuWW5ZCHyrQZYlEWlO45",
  access_token_key: "2405531070-elt5ErPJbH3GAlilq3d3aHnKqkGcGiFWRBPRgw5",
  access_token_secret: "IbZosIuhZGHXthm2rkoAvp2sFKCUQtF69iqKruCAV8U7p"
});


t.stream('statuses/filter', { 'locations': '-180,-90,180,90' }, function(stream) {
  stream.on('data', function(data){
    if (data.id != null) {
      if (tweetData == null) {
        tweetData = data;
      } else {
        // alert(data.text);
        if (data.text.indexOf("lol") > -1){
          // alert("nice");
        var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
        dataRef.push({name: data.user.name, text: data.text});
        tweetData = null;
      }
      }
    } 
  }) ;
}) ;
