function updateViewMetrics(){
	$("#positive").html("Positive: " + metrics.positiveTweetCount + " (" + metrics.positivePerSecond + "/second)");
	$("#neutral").html("Neutral: " + metrics.neutralTweetCount + " (" + metrics.neutralPerSecond + "/second)");
	$("#negative").html("Negative: " +metrics.negativeTweetCount + " (" + metrics.negativePerSecond + "/second)");
}

setInterval(function(){
  metrics.seconds++;
  $("#seconds").html("Seconds: " + metrics.seconds);
},1000);

function insertTweet(new_tweet, color){
	$("#tweets").append("<p style='color:" + color +"'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>");
};

