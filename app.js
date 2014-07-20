var sentiment = require('sentiment');
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var twitter = require('twitter');
var io      = require('socket.io').listen(server)
var Firebase = require('firebase');
var env     = require('node-env-file');
var tweetData;
var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");

server.listen(process.env.PORT || 5000)
console.log("Node server started on port 5000");

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
  search = req.query || "";
});

var t = new twitter({
  consumer_key: "c6eNELOE5cuIDyXumVzl4bwsm",
  consumer_secret: "Du9PSkr5KNRuS8qVHGJYRprnJyR6AjsuWW5ZCHyrQZYlEWlO45",
  access_token_key: "2405531070-elt5ErPJbH3GAlilq3d3aHnKqkGcGiFWRBPRgw5",
  access_token_secret: "IbZosIuhZGHXthm2rkoAvp2sFKCUQtF69iqKruCAV8U7p"
});


function beginStream(){
t.stream('statuses/filter', {locations :'-125,30,-70,48'}, function(stream) {
  stream.on('data', newTweet);
}) ;
}
function firebaseTweet(name, text, score){
  this.name = name;
  this.text = text;
  this.score = score;
}

function newTweet(data){
  if (new Date().getTime() % 100 == 0){
    console.log("reset");
    dataRef.remove();
  }
  dataRef.push(new firebaseTweet(data.user.name, data.text, sentiment(data.text)));
}
beginStream();

