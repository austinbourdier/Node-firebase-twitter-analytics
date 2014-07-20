var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);


function importFromFirebase(snapshot){
	analyzeSentimentValue(snapshot.val())	
};     

$(document).ready(function(){
	$('#map').highcharts('Map', {
		title : {
			text : 'Tweet Sentiment Analysis'
		},
		mapNavigation: {
			enabled: true,
		},
		colorAxis: {
			min: 0,
			max: 100,
			minColor: '#FF0000',
			maxColor: '#00FF00'
		},
		series : [{
			data : data,
			mapData: Highcharts.maps['countries/us/custom/us-all-mainland'],
			joinBy: 'hc-key',
			name: 'Sentiment Value',
			states: {
				hover: {
					color: '#BADA55'
				}
			},
		}]
	});
});

var stateSentiment = { 'ma': 0,
 'wa': 0,
 'ca': 0,
 'or': 0,
 'nv': 0,
 'nm': 0,
 'co': 0,
 'wy': 0,
 'wi': 0,
 'ks': 0,
 'ne': 0, 
 'me': 0, 
 'ok': 0, 
 'mo': 0, 
 'mi': 0, 
 'il': 0, 
 'in': 0, 
 'vt': 0, 
 'az': 0, 
 'ar': 0, 
 'tx': 0, 
 'id': 0, 
 'ri': 0, 
 'al': 0, 
 'ga': 0, 
 'ms': 0, 
 'sc': 0, 
 'nc': 0, 
 'va': 0, 
 'ia': 0, 
 'md': 0, 
 'de': 0, 
 'nj': 0, 
 'pa': 0, 
 'ny': 0, 
 'sd': 0, 
 'ct': 0, 
 'nh': 0, 
 'ky': 0, 
 'oh': 0, 
 'tn': 0, 
 'wv': 0, 
 'dc': 0, 
 'mn': 0, 
 'mt': 0, 
 'la': 0, 
 'nd': 0, 
 'fl': 0, 
 'ut': 0}
 
var data = [{ 'hc-key': 'us-ma', value: stateSentiment['ma'] },
{ 'hc-key': 'us-wa', value: stateSentiment['wa'] },
{ 'hc-key': 'us-ca', value: stateSentiment['ca'] },
{ 'hc-key': 'us-or', value: stateSentiment['or'] },
{ 'hc-key': 'us-nv', value: stateSentiment['nv'] },
{ 'hc-key': 'us-nm', value: stateSentiment['nm'] },
{ 'hc-key': 'us-co', value: stateSentiment['co'] },
{ 'hc-key': 'us-wy', value: stateSentiment['wy'] },
{ 'hc-key': 'us-wi', value: stateSentiment['wi'] },
{ 'hc-key': 'us-ks', value: stateSentiment['ks'] },
{ 'hc-key': 'us-ne', value: stateSentiment['ne'] },
{ 'hc-key': 'us-me', value: stateSentiment['me'] },
{ 'hc-key': 'us-ok', value: stateSentiment['ok'] },
{ 'hc-key': 'us-mo', value: stateSentiment['mo'] },
{ 'hc-key': 'us-mi', value: stateSentiment['mi'] },
{ 'hc-key': 'us-il', value: stateSentiment['il'] },
{ 'hc-key': 'us-in', value: stateSentiment['in'] },
{ 'hc-key': 'us-vt', value: stateSentiment['vt'] },
{ 'hc-key': 'us-az', value: stateSentiment['az'] },
{ 'hc-key': 'us-ar', value: stateSentiment['ar'] },
{ 'hc-key': 'us-tx', value: stateSentiment['tx'] },
{ 'hc-key': 'us-id', value: stateSentiment['id'] },
{ 'hc-key': 'us-ri', value: stateSentiment['ri'] },
{ 'hc-key': 'us-al', value: stateSentiment['al'] },
{ 'hc-key': 'us-ga', value: stateSentiment['ga'] },
{ 'hc-key': 'us-ms', value: stateSentiment['ms'] },
{ 'hc-key': 'us-sc', value: stateSentiment['sc'] },
{ 'hc-key': 'us-nc', value: stateSentiment['nc'] },
{ 'hc-key': 'us-va', value: stateSentiment['va'] },
{ 'hc-key': 'us-ia', value: stateSentiment['ia'] },
{ 'hc-key': 'us-md', value: stateSentiment['md'] },
{ 'hc-key': 'us-de', value: stateSentiment['de'] },
{ 'hc-key': 'us-nj', value: stateSentiment['nj'] },
{ 'hc-key': 'us-pa', value: stateSentiment['pa'] },
{ 'hc-key': 'us-ny', value: stateSentiment['ny'] },
{ 'hc-key': 'us-sd', value: stateSentiment['sd'] },
{ 'hc-key': 'us-ct', value: stateSentiment['ct'] },
{ 'hc-key': 'us-nh', value: stateSentiment['nh'] },
{ 'hc-key': 'us-ky', value: stateSentiment['ky'] },
{ 'hc-key': 'us-oh', value: stateSentiment['oh'] },
{ 'hc-key': 'us-tn', value: stateSentiment['tn'] },
{ 'hc-key': 'us-wv', value: stateSentiment['wv'] },
{ 'hc-key': 'us-dc', value: stateSentiment['dc'] },
{ 'hc-key': 'us-mn', value: stateSentiment['mn'] },
{ 'hc-key': 'us-mt', value: stateSentiment['mt'] },
{ 'hc-key': 'us-la', value: stateSentiment['la'] },
{ 'hc-key': 'us-nd', value: stateSentiment['nd'] },
{ 'hc-key': 'us-fl', value: stateSentiment['fl'] },
{ 'hc-key': 'us-ut', value: stateSentiment['ut'] }];