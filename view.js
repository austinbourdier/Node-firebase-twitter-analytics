function updateViewMetrics(){
	$("#positive").html(metrics.positiveTweetCount);
	$("#neutral").html(metrics.neutralTweetCount);
	$("#negative").html(metrics.negativeTweetCount);
	$("#positivePerSecond").html(metrics.positivePerSecond);
	$("#neutralPerSecond").html(metrics.neutralPerSecond);
	$("#negativePerSecond").html(metrics.negativePerSecond);
}

setInterval(function(){
	metrics.seconds++;
	$("#seconds").html("Seconds: " + metrics.seconds);
},1000);

function insertTweet(new_tweet, color){
	$("#tweets").append("<p style='color:" + color +"'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>");
};


