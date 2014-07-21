var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);

	function importFromFirebase(snapshot){
		analyzeSentimentValue(snapshot.val());
	};     

	$(function () {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
    
        var chart;
        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = metrics.positivePerSecond-metrics.negativePerSecond;
                            series.addPoint([x, y], true, true);
                        }, 1500);
                    }
                }
            },
            title: {
                text: 'Twitter Sentiment Analysis'
            },
            xAxis: {
            	title: {
            		text: 'Time',
            	},
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Sentiment Rate'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Sentiment Rate',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -10; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
                    }
                    return data;
                })()
            }]
        });
    });
    
});
// function Pos(lat, lon){
// 	this.coords = {latitude: lat, longitude: lon}
// }

// function logState(new_tweet){
// 	addToState(getClosestState(new Pos(new_tweet.location[0], new_tweet.location[1])));
// };


// function addToState(stateInitials){
// 	console.log("1");	
// 	for (state in data){
// 		console.log(state);
// 	}
		// logState(snapshot.val());
// 	// data[stateInitials]++;
	// var data = [["MA" , { 'hc-key': 'us-ma', value: 0 }],
	// 	["WA" , { 'hc-key': 'us-wa', value: 0 }],
	// ["CA" , { 'hc-key': 'us-ca', value: 0 }],
	// ["OR" , { 'hc-key': 'us-or', value: 0 }],
	// ["NV" , { 'hc-key': 'us-nv', value: 0 }],
	// ["NM" , { 'hc-key': 'us-nm', value: 0 }],
	// ["CO" , { 'hc-key': 'us-co', value: 0 }],
	// ["WY" , { 'hc-key': 'us-wy', value: 0 }],
	// ["WI" , { 'hc-key': 'us-wi', value: 0 }],
	// ["KS" , { 'hc-key': 'us-ks', value: 0 }],
	// ["NE" , { 'hc-key': 'us-ne', value: 0 }],
	// ["ME" , { 'hc-key': 'us-me', value: 0 }],
	// ["OK" , { 'hc-key': 'us-ok', value: 0 }],
	// ["MO" , { 'hc-key': 'us-mo', value: 0 }],
	// ["MI" , { 'hc-key': 'us-mi', value: 0 }],
	// ["IL" , { 'hc-key': 'us-il', value: 0 }],
	// ["IN" , { 'hc-key': 'us-in', value: 0 }],
	// ["VT" , { 'hc-key': 'us-vt', value: 0 }],
	// ["AZ" , { 'hc-key': 'us-az', value: 0 }],
	// ["AR" , { 'hc-key': 'us-ar', value: 0 }],
	// ["TX" , { 'hc-key': 'us-tx', value: 0 }],
	// ["ID" , { 'hc-key': 'us-id', value: 0 }],
	// ["RI" , { 'hc-key': 'us-ri', value: 0 }],
	// ["AL" , { 'hc-key': 'us-al', value: 0 }],
	// ["GA" , { 'hc-key': 'us-ga', value: 0 }],
	// ["MS" , { 'hc-key': 'us-ms', value: 0 }],
	// ["SC" , { 'hc-key': 'us-sc', value: 0 }],
	// ["NC" , { 'hc-key': 'us-nc', value: 0 }],
	// ["VA" , { 'hc-key': 'us-va', value: 0 }],
	// ["IA" , { 'hc-key': 'us-ia', value: 0 }],
	// ["MD" , { 'hc-key': 'us-md', value: 0 }],
	// ["DE" , { 'hc-key': 'us-de', value: 0 }],
	// ["NJ" , { 'hc-key': 'us-nj', value: 0 }],
	// ["PA" , { 'hc-key': 'us-pa', value: 0 }],
	// ["NY" , { 'hc-key': 'us-ny', value: 0 }],
	// ["SD" , { 'hc-key': 'us-sd', value: 0 }],
	// ["CT" , { 'hc-key': 'us-ct', value: 0 }],
	// ["NH" , { 'hc-key': 'us-nh', value: 0 }],
	// ["KY" , { 'hc-key': 'us-ky', value: 0 }],
	// ["OH" , { 'hc-key': 'us-oh', value: 0 }],
	// ["TN" , { 'hc-key': 'us-tn', value: 0 }],
	// ["WV" , { 'hc-key': 'us-wv', value: 0 }],
	// ["DC" , { 'hc-key': 'us-dc', value: 0 }],
	// ["MN" , { 'hc-key': 'us-mn', value: 0 }],
	// ["MT" , { 'hc-key': 'us-mt', value: 0 }],
	// ["LA" , { 'hc-key': 'us-la', value: 0 }],
	// ["ND" , { 'hc-key': 'us-nd', value: 0 }],
	// ["FL" , { 'hc-key': 'us-fl', value: 0 }],
	// ["UT" , { 'hc-key': 'us-ut', value: 0 }]];

	// var states = {
	// 	AK: [ 61.3850, -152.2683 ],
	// 	AL: [ 32.7990, -86.8073 ],
	// 	AR: [ 34.9513, -92.3809 ],
	// 	AS: [ 14.2417, -170.7197 ],
	// 	AZ: [ 33.7712, -111.3877 ],
	// 	CA: [ 36.1700, -119.7462 ],
	// 	CO: [ 39.0646, -105.3272 ],
	// 	CT: [ 41.5834, -72.7622 ],
	// 	DC: [ 38.8964, -77.0262 ],
	// 	DE: [ 39.3498, -75.5148 ],
	// 	FL: [ 27.8333, -81.7170 ],
	// 	GA: [ 32.9866, -83.6487 ],
	// 	HI: [ 21.1098, -157.5311 ],
	// 	IA: [ 42.0046, -93.2140 ],
	// 	ID: [ 44.2394, -114.5103 ],
	// 	IL: [ 40.3363, -89.0022 ],
	// 	IN: [ 39.8647, -86.2604 ],
	// 	KS: [ 38.5111, -96.8005 ],
	// 	KY: [ 37.6690, -84.6514 ],
	// 	LA: [ 31.1801, -91.8749 ],
	// 	MA: [ 42.2373, -71.5314 ],
	// 	MD: [ 39.0724, -76.7902 ],
	// 	ME: [ 44.6074, -69.3977 ],
	// 	MI: [ 43.3504, -84.5603 ],
	// 	MN: [ 45.7326, -93.9196 ],
	// 	MO: [ 38.4623, -92.3020 ],
	// 	MP: [ 14.8058, 145.5505 ],
	// 	MS: [ 32.7673, -89.6812 ],
	// 	MT: [ 46.9048, -110.3261 ],
	// 	NC: [ 35.6411, -79.8431 ],
	// 	ND: [ 47.5362, -99.7930 ],
	// 	NE: [ 41.1289, -98.2883 ],
	// 	NH: [ 43.4108, -71.5653 ],
	// 	NJ: [ 40.3140, -74.5089 ],
	// 	NM: [ 34.8375, -106.2371 ],
	// 	NV: [ 38.4199, -117.1219 ],
	// 	NY: [ 42.1497, -74.9384 ],
	// 	OH: [ 40.3736, -82.7755 ],
	// 	OK: [ 35.5376, -96.9247 ],
	// 	OR: [ 44.5672, -122.1269 ],
	// 	PA: [ 40.5773, -77.2640 ],
	// 	PR: [ 18.2766, -66.3350 ],
	// 	RI: [ 41.6772, -71.5101 ],
	// 	SC: [ 33.8191, -80.9066 ],
	// 	SD: [ 44.2853, -99.4632 ],
	// 	TN: [ 35.7449, -86.7489 ],
	// 	TX: [ 31.1060, -97.6475 ],
	// 	UT: [ 40.1135, -111.8535 ],
	// 	VA: [ 37.7680, -78.2057 ],
	// 	VI: [ 18.0001, -64.8199 ],
	// 	VT: [ 44.0407, -72.7093 ],
	// 	WA: [ 47.3917, -121.5708 ],
	// 	WI: [ 44.2563, -89.6385 ],
	// 	WV: [ 38.4680, -80.9696 ],
	// 	WY: [ 42.7475, -107.2085 ]
	// };

	// var getClosestState = function( pos ) {

	// 	var loc = [ pos.coords.latitude, pos.coords.longitude ],
	// 	closestState = {
	// 		name: undefined,
	// 		proximity: 180
	// 	};

	// 	forEach( states, function( coords, state ){

	// 		var proximity = Math.abs( loc[0] - coords[0] ) + Math.abs( loc[1] - coords[1] );

	// 		if ( proximity < closestState.proximity ) {
	// 			closestState.name = state;
	// 			closestState.proximity = proximity;
	// 		}

	// 	});

	// 	return closestState.name;

	// };	

	// var hasOwn = Object.prototype.hasOwnProperty;
	// var toString = Object.prototype.toString;

	// function forEach (obj, fn, ctx) {
	// 	if (toString.call(fn) !== '[object Function]') {
	// 		throw new TypeError('iterator must be a function');
	// 	}
	// 	var l = obj.length;
	// 	if (l === +l) {
	// 		for (var i = 0; i < l; i++) {
	// 			fn.call(ctx, obj[i], i, obj);
	// 		}
	// 	} else {
	// 		for (var k in obj) {
	// 			if (hasOwn.call(obj, k)) {
	// 				fn.call(ctx, obj[k], k, obj);
	// 			}
	// 		}
	// 	}
	// };