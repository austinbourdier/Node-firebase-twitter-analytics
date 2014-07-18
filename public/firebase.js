var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", function(snapshot){
  var new_tweet = snapshot.val();
  if (new_tweet.score.score > 0 ){
  $("#tweets").append("<p style='color:green;'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>")
  } else {
  $("#tweets").append("<p style='color:red;'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>")
	}
  $('#tweets')[0].scrollTop = $('#tweets')[0].scrollHeight;
});     
