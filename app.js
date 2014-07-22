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
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET
});

// initialize tweet stream
function beginStream(){
t.stream('statuses/filter', {locations :'-125,30,-70,48'}, function(stream) {
  stream.on('data', sendTweetToFirebase);
});
}

// firebase tweets object
function firebaseTweet(name, text, score, location){
  this.name = name;
  this.text = text;
  this.score = score;
  this.location = location;
}


function sendTweetToFirebase(data){
  if (new Date().getTime() % 1000 == 0){
    dataRef.remove();
  }
  if (data.geo != null){
    dataRef.push(new firebaseTweet(data.user.name, data.text, sentiment(data.text), data.geo.coordinates));
  }
}

// initialize
beginStream();


