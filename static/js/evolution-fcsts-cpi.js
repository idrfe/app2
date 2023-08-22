const ranges_evol_cpi = [
  [4, 6.98],
  [4, 7.67],
  [4, 8.44],
  [5, 11.59],
  [4.75, 11.65],
  [7.12, 11.68],
  [4.74, 12.16],
  [6.7, 12.78],
  [7.3, 12.3],
  [8.81, 12.25],
  [9.4, 12.26],
  [8.91, 12.94],


],
averages_evol_cpi = [
  [5.45],
  [5.7],
  [6.3],
  [7.13],
  [7.65],
  [8.21],
  [9.28],
  [9.75],
  [10.33],
  [10.98],
  [11.16],
  [11.34],

];

let evol_cpi_options = {

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
    data: averages_evol_cpi,
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
    data: ranges_evol_cpi,
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
}


Highcharts.chart('evol-fcsts-cpi', evol_cpi_options);
