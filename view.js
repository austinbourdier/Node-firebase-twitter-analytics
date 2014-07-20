// update the metrics table, this occurs as every tweet come ins
function updateViewMetrics(){
	$("#positive").html(metrics.positiveTweetCount);
	$("#neutral").html(metrics.neutralTweetCount);
	$("#negative").html(metrics.negativeTweetCount);
	$("#positivePerSecond").html(metrics.positivePerSecond);
	$("#neutralPerSecond").html(metrics.neutralPerSecond);
	$("#negativePerSecond").html(metrics.negativePerSecond);
}
var filteredWord = prompt("Enter a word:");

// update counter every 1 second
setInterval(function(){
	metrics.seconds++;
	$("#seconds").html("Seconds: " + metrics.seconds);
},1000);

// Insert tweet into stream container along with color for this tweet
function insertTweet(new_tweet, color){
	$("#tweets").append("<p style='color:" + color +"'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>");
};


