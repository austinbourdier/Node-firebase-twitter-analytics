var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);


function Pos(lat, lon){
	this.coords = {latitude: lat, longitude: lon}
}

function logState(new_tweet){
	addToState(getClosestState(new Pos(new_tweet.location[0], new_tweet.location[1])));
};


function addToState(stateInitials){
		stateSentiment[stateInitials]++;
		console.log(stateSentiment[stateInitials]);
};	
function importFromFirebase(snapshot){
	analyzeSentimentValue(snapshot.val());
	logState(snapshot.val());
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

var stateSentiment = { 'MA': 0,
 'WA': 0,
 'CA': 0,
 'OR': 0,
 'NV': 0,
 'NM': 0,
 'CO': 0,
 'WY': 0,
 'WI': 0,
 'KS': 0,
 'NE': 0, 
 'ME': 0, 
 'OK': 0, 
 'MO': 0, 
 'MI': 0, 
 'IL': 0, 
 'IN': 0, 
 'VT': 0, 
 'AZ': 0, 
 'AR': 0, 
 'TX': 0, 
 'ID': 0, 
 'RI': 0, 
 'AL': 0, 
 'GA': 0, 
 'MS': 0, 
 'SC': 0, 
 'NC': 0, 
 'VA': 0, 
 'IA': 0, 
 'MD': 0, 
 'DE': 0, 
 'NJ': 0, 
 'PA': 0, 
 'NY': 0, 
 'SD': 0, 
 'CT': 0, 
 'NH': 0, 
 'KY': 0, 
 'OH': 0, 
 'TN': 0, 
 'WV': 0, 
 'DC': 0, 
 'MN': 0, 
 'MT': 0, 
 'LA': 0, 
 'ND': 0, 
 'FL': 0, 
 'UT': 0}

var data = [{ 'hc-key': 'us-ma', value: stateSentiment['MA'] },
{ 'hc-key': 'us-wa', value: stateSentiment['WA'] },
{ 'hc-key': 'us-ca', value: stateSentiment['CA'] },
{ 'hc-key': 'us-or', value: stateSentiment['OR'] },
{ 'hc-key': 'us-nv', value: stateSentiment['NV'] },
{ 'hc-key': 'us-nm', value: stateSentiment['NM'] },
{ 'hc-key': 'us-co', value: stateSentiment['CO'] },
{ 'hc-key': 'us-wy', value: stateSentiment['WY'] },
{ 'hc-key': 'us-wi', value: stateSentiment['WI'] },
{ 'hc-key': 'us-ks', value: stateSentiment['KS'] },
{ 'hc-key': 'us-ne', value: stateSentiment['NE'] },
{ 'hc-key': 'us-me', value: stateSentiment['ME'] },
{ 'hc-key': 'us-ok', value: stateSentiment['OK'] },
{ 'hc-key': 'us-mo', value: stateSentiment['MO'] },
{ 'hc-key': 'us-mi', value: stateSentiment['MI'] },
{ 'hc-key': 'us-il', value: stateSentiment['IL'] },
{ 'hc-key': 'us-in', value: stateSentiment['IN'] },
{ 'hc-key': 'us-vt', value: stateSentiment['VT'] },
{ 'hc-key': 'us-az', value: stateSentiment['AZ'] },
{ 'hc-key': 'us-ar', value: stateSentiment['AR'] },
{ 'hc-key': 'us-tx', value: stateSentiment['TX'] },
{ 'hc-key': 'us-id', value: stateSentiment['ID'] },
{ 'hc-key': 'us-ri', value: stateSentiment['RI'] },
{ 'hc-key': 'us-al', value: stateSentiment['AL'] },
{ 'hc-key': 'us-ga', value: stateSentiment['GA'] },
{ 'hc-key': 'us-ms', value: stateSentiment['MS'] },
{ 'hc-key': 'us-sc', value: stateSentiment['SC'] },
{ 'hc-key': 'us-nc', value: stateSentiment['NC'] },
{ 'hc-key': 'us-va', value: stateSentiment['VA'] },
{ 'hc-key': 'us-ia', value: stateSentiment['IA'] },
{ 'hc-key': 'us-md', value: stateSentiment['MD'] },
{ 'hc-key': 'us-de', value: stateSentiment['DE'] },
{ 'hc-key': 'us-nj', value: stateSentiment['NJ'] },
{ 'hc-key': 'us-pa', value: stateSentiment['PA'] },
{ 'hc-key': 'us-ny', value: stateSentiment['NY'] },
{ 'hc-key': 'us-sd', value: stateSentiment['SD'] },
{ 'hc-key': 'us-ct', value: stateSentiment['CT'] },
{ 'hc-key': 'us-nh', value: stateSentiment['NH'] },
{ 'hc-key': 'us-ky', value: stateSentiment['KY'] },
{ 'hc-key': 'us-oh', value: stateSentiment['OH'] },
{ 'hc-key': 'us-tn', value: stateSentiment['TN'] },
{ 'hc-key': 'us-wv', value: stateSentiment['WV'] },
{ 'hc-key': 'us-dc', value: stateSentiment['DC'] },
{ 'hc-key': 'us-mn', value: stateSentiment['MN'] },
{ 'hc-key': 'us-mt', value: stateSentiment['MT'] },
{ 'hc-key': 'us-la', value: stateSentiment['LA'] },
{ 'hc-key': 'us-nd', value: stateSentiment['ND'] },
{ 'hc-key': 'us-fl', value: stateSentiment['FL'] },
{ 'hc-key': 'us-ut', value: stateSentiment['UT'] }];

var states = {
  AK: [ 61.3850, -152.2683 ],
  AL: [ 32.7990, -86.8073 ],
  AR: [ 34.9513, -92.3809 ],
  AS: [ 14.2417, -170.7197 ],
  AZ: [ 33.7712, -111.3877 ],
  CA: [ 36.1700, -119.7462 ],
  CO: [ 39.0646, -105.3272 ],
  CT: [ 41.5834, -72.7622 ],
  DC: [ 38.8964, -77.0262 ],
  DE: [ 39.3498, -75.5148 ],
  FL: [ 27.8333, -81.7170 ],
  GA: [ 32.9866, -83.6487 ],
  HI: [ 21.1098, -157.5311 ],
  IA: [ 42.0046, -93.2140 ],
  ID: [ 44.2394, -114.5103 ],
  IL: [ 40.3363, -89.0022 ],
  IN: [ 39.8647, -86.2604 ],
  KS: [ 38.5111, -96.8005 ],
  KY: [ 37.6690, -84.6514 ],
  LA: [ 31.1801, -91.8749 ],
  MA: [ 42.2373, -71.5314 ],
  MD: [ 39.0724, -76.7902 ],
  ME: [ 44.6074, -69.3977 ],
  MI: [ 43.3504, -84.5603 ],
  MN: [ 45.7326, -93.9196 ],
  MO: [ 38.4623, -92.3020 ],
  MP: [ 14.8058, 145.5505 ],
  MS: [ 32.7673, -89.6812 ],
  MT: [ 46.9048, -110.3261 ],
  NC: [ 35.6411, -79.8431 ],
  ND: [ 47.5362, -99.7930 ],
  NE: [ 41.1289, -98.2883 ],
  NH: [ 43.4108, -71.5653 ],
  NJ: [ 40.3140, -74.5089 ],
  NM: [ 34.8375, -106.2371 ],
  NV: [ 38.4199, -117.1219 ],
  NY: [ 42.1497, -74.9384 ],
  OH: [ 40.3736, -82.7755 ],
  OK: [ 35.5376, -96.9247 ],
  OR: [ 44.5672, -122.1269 ],
  PA: [ 40.5773, -77.2640 ],
  PR: [ 18.2766, -66.3350 ],
  RI: [ 41.6772, -71.5101 ],
  SC: [ 33.8191, -80.9066 ],
  SD: [ 44.2853, -99.4632 ],
  TN: [ 35.7449, -86.7489 ],
  TX: [ 31.1060, -97.6475 ],
  UT: [ 40.1135, -111.8535 ],
  VA: [ 37.7680, -78.2057 ],
  VI: [ 18.0001, -64.8199 ],
  VT: [ 44.0407, -72.7093 ],
  WA: [ 47.3917, -121.5708 ],
  WI: [ 44.2563, -89.6385 ],
  WV: [ 38.4680, -80.9696 ],
  WY: [ 42.7475, -107.2085 ]
};

var getClosestState = function( pos ) {

  var loc = [ pos.coords.latitude, pos.coords.longitude ],
      closestState = {
        name: undefined,
        proximity: 180
      };

  forEach( states, function( coords, state ){

    var proximity = Math.abs( loc[0] - coords[0] ) + Math.abs( loc[1] - coords[1] );

    if ( proximity < closestState.proximity ) {
      closestState.name = state;
      closestState.proximity = proximity;
    }

  });

  return closestState.name;
  
};	

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};