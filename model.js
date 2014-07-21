var metrics = {
	seconds: 0,
	positiveTweetCount: 0,
	neutralTweetCount: 0,
	negativeTweetCount: 0,
	positivePerSecond: 0,
	neutralPerSecond: 0,
	negativePerSecond: 0
}

var filteredWord = prompt("Enter a word:") || "";

function analyzeSentimentValue(new_tweet){
	if (new_tweet.text.indexOf(filteredWord) > -1){
		updateTally(new_tweet.score.score);
		if (new_tweet.score.score > 0){
			insertTweet(new_tweet, "green");
		} else if (new_tweet.score.score == 0){
			insertTweet(new_tweet, "black");
		} else {
			insertTweet(new_tweet, "red");
		}
		$('#tweets')[0].scrollTop = $('#tweets')[0].scrollHeight;
	}
};

function updateTally(score){
	updateViewMetrics();
	if (score > 0){
		metrics.positiveTweetCount++;
		metrics.positivePerSecond = Math.round(100*metrics.positiveTweetCount/metrics.seconds)/100;
	} else if (score == 0){
		metrics.neutralTweetCount++;
		metrics.neutralPerSecond = Math.round(100*metrics.neutralTweetCount/metrics.seconds)/100;
	} else {
		metrics.negativeTweetCount++;
		metrics.negativePerSecond = Math.round(100*metrics.negativeTweetCount/metrics.seconds)/100;
	}
}

$(document).ready(function(){
	bindEventListeners();
})

function bindEventListeners(){
	$("button").click(function(){
		resetMetrics();
	})
}

function resetMetrics(){
	for(property in metrics){
		metrics[property] = 0;
	}
	clearFirebase();
}

function clearFirebase(){
	dataRef.remove();
} 
