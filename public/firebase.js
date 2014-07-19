


var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);

var voteTally = {
	positive: 0,
	neutral: 0,
	negative: 0 
}

function importFromFirebase(snapshot){
	var new_tweet = snapshot.val();
	analyzeSentimentValue(new_tweet);
};     

function analyzeSentimentValue(new_tweet){
	if (new_tweet.score.score > 0){
		insertTweet(new_tweet, "green");
	} else if (new_tweet.score.score == 0){
		insertTweet(new_tweet, "black");
	} else {
		insertTweet(new_tweet, "red");
	}
	$('#tweets')[0].scrollTop = $('#tweets')[0].scrollHeight;
	updateTally(new_tweet.score.score);
};

function insertTweet(new_tweet, color){
	$("#tweets").append("<p style='color:" + color +"'>" + new_tweet.name +  "______________" + new_tweet.text + "</p>");
};

function updateTally(score){
	if (score > 0){
		voteTally.positive++;
	} else if (score == 0){
		voteTally.neutral++;
	} else {
		voteTally.negative++;
	}
}