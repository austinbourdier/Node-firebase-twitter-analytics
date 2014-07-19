// var twit = require('twit');
var sentiment = require('sentiment');
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
  consumer_key: 
  consumer_secret:
  access_token_key: 
  access_token_secret: 
});


t.stream('statuses/filter', { 'locations': '-125,30,-70,48' },   function(stream) {
  stream.on('data', function(data){
    if (data.id != null) {
      if (tweetData == null) {
        tweetData = data;
      } else {
        var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
        var score = sentiment(data.text);
        dataRef.push({name: data.user.name, text: data.text, score: score});
        tweetData = null;
      }
    } 
  }) ;
}) ;

