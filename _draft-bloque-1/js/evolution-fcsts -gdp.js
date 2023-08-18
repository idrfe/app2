const ranges = [
  [13.7, 25.6],
  [13.3, 21.8],
  [11.2, 19.9],
  [7.9, 17.3],
  [4.9, 20.6],
  [5.1, 16.8],
  [9.3, 21.1],
  [11.1, 20.5],
  [8.9, 18.4],
  [4.6, 23.2],
  [11.5, 26.0],
  [8.6, 23.4],


],
averages = [
  [18.1],
  [17.1],
  [15.2],
  [12.7],
  [13.3],
  [10.6],
  [15.6],
  [16.1],
  [14.0],
  [15.3],
  [17.5],
  [17.5],

];


Highcharts.chart('evol-fcsts-gdp', {

title: {
  text: '',
  align: 'left'
},


  xAxis: {
    type: 'datetime',
    tickPositioner: function () {
      var ticks = [],
        interval = Math.ceil((this.dataMax - this.dataMin) / 4); // Set the desired number of ticks here

      for (var i = this.dataMin; i <= this.dataMax; i += interval) {
        ticks.push(i);
      }

      return ticks;
    },
  labels: {
      formatter: function () {
        return Highcharts.dateFormat('%b \'%y', this.value);
      },
      style:{
        fontSize:12,
      }
    },
  },

yAxis: {
  gridLineWidth: 0.25,
  gridLineColor: 'rgb(210,210,210)',
  title: {
    text: null
  },
  tickAmount:5,
  labels: {
    style:{}
  }
},

      legend: {
      itemStyle:{
      fontSize:11,
      },
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      floating: true, // Set the legend to be floating inside the chart area
      backgroundColor: 'transparent',
      x: 20, // Set the horizontal position of the legend
      y: -30, // Set the vertical position of the legend// Optional: Set a background color for the legend
    },

tooltip: {
  crosshairs: true,
  shared: true,
},

plotOptions: {
  series: {
    pointStart: Date.UTC(2022, 7, 1),
    pointIntervalUnit: 'month'
  }
},
credits:{
enabled:false
},
exporting:{
enabled:false
},

series: [{
  name: 'Consensus',
  type:'spline',
  data: averages,
  lineWidth: 5,
  color: '#DC143C',
  zIndex: 1,
  marker: {
    fillColor: '#ffffff',
    lineWidth: 3,
    lineColor: '#DC143C'
  }
}, {
  name: 'Range',
  data: ranges,
  type: 'arearange',
  dashStyle: 'longDash',

  linkedTo: ':previous',
  lineWidth: 1,
  color: '#eaeaea',
  fillOpacity: 0.45,
  zIndex: 0,

  marker: {
    enabled: false
  }
  
}]
});
