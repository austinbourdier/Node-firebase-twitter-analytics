// var express = require('express');
// var app     = express();
// var server  = require('http').createServer(app);
// var twitter = require('twitter');
// var Firebase = require('firebase');
// var env     = require('node-env-file');
// var tweetData;
// var search = prompt("Search for a word:");
var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");



dataRef.limit(20).on("child_added", function(snapshot){
  var new_tweet = snapshot.val();
  $("#tweets").append("<p>" + new_tweet.name +  "______________" + new_tweet.text + "</p>")
  $('#tweets')[0].scrollTop = $('#tweets')[0].scrollHeight;
});     
