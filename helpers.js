var dataRef = new Firebase("https://scorching-fire-1875.firebaseio.com/");
dataRef.limit(20).on("child_added", importFromFirebase);
function importFromFirebase(snapshot){
	analyzeSentimentValue(snapshot.val());
};


// Highcharts spline handler
$(function () {
	$(document).ready(function() {
		Highcharts.setOptions({
			global: {
				useUTC: false
			}
		});
		var chart;
		$('#spline').highcharts({
			chart: {
				type: 'spline',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
          	load: function() {

                var series = this.series[0];
                setInterval(function() {
                // score
                // console.log(dataRef['m']['Ha']['$']['o']['ea']['value']['o']['ea']['left']['right']['value']['F'])
                // time
                // console.log(dataRef['m']['Ha']['$']['o']['ea']['value']['o']['ea']['right']['value']['F'])
                var x = (new Date()).getTime(), // current time
                y = metrics.positivePerSecond-metrics.negativePerSecond;
                series.addPoint([x, y], true, true);
            }, 3000);
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
      var data = [],
      time = (new Date()).getTime(),
      i;
      for (i = -25; i <= 0; i++) {
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
