require('newrelic');
var sentiment = require('sentiment');
var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var twitter = require('twitter');
var Firebase = require('firebase');
var env     = require('node-env-file');
var tweetData;
var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");


// start server
server.listen(process.env.PORT || 5000)
console.log("Node server started on port 5000");

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
  search = req.query || "";
});

// declare env file
// env(__dirname + '/.env');

// twitter auth
var t = new twitter({
consumer_key:"c6eNELOE5cuIDyXumVzl4bwsm",
consumer_secret:"Du9PSkr5KNRuS8qVHGJYRprnJyR6AjsuWW5ZCHyrQZYlEWlO45",
access_token_key:"2405531070-elt5ErPJbH3GAlilq3d3aHnKqkGcGiFWRBPRgw5",
access_token_secret:"IbZosIuhZGHXthm2rkoAvp2sFKCUQtF69iqKruCAV8U7p"
});

// initialize tweet stream
function beginStream(){
t.stream('statuses/filter', {locations :'-125,30,-70,48'}, function(stream) {
  stream.on('data', sendTweetToFirebase);
});
}

// firebase tweets object
function firebaseTweet(name, text, score, location, time){
  this.name = name;
  this.text = text;
  this.score = score;
  this.location = location;
  this.time = time;
}


function sendTweetToFirebase(data){
  // if (new Date().getTime() % 1000 == 0){
  //   dataRef.remove();
  // }
  if (data.geo != null){
    dataRef.push(new firebaseTweet(data.user.name, data.text, sentiment(data.text).score, data.geo.coordinates, ((new Date()).getTime())));
  }
}

// initialize
beginStream();
// initChart();

