var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);

function importFromFirebase(snapshot){
	analyzeSentimentValue(snapshot.val());
};     