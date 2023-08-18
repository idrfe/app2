Highcharts.chart('ti-chart-container', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: null,
    align: 'left'
  },
  subtitle: {
    text: "Sources: National Administrative Department of Statistics Colombia, FocusEconomics",
    align: "right",
    verticalAlign: "bottom"
  },
  xAxis: {
    plotBands: [
        {
          from: 9.5, 
          to: 16.5,
          color: 'rgba(234, 234, 234, 0.45)'
        },
        
      ],
      type: 'linear', // Use linear type for integer x-axis
      tickPositions: [0, 4, 8, 12, 16], // Control tick positions (corresponding to your categories)
      labels: {
        style:{
          fontSize:12,
        },
        
        rotation: 0,
        y: 30,
        step: 1,
        formatter: function() {
          // Use the tick position to substitute with your custom categories
          var customCategories = ['Q4 20', 'Q1 21', 'Q2 21', 'Q3 21', 'Q4 21', 'Q1 22', 'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'];
          return customCategories[this.value] || '';
        }
      },
      crosshair: true,
      min: 0, // Set the minimum value for the x-axis
      max: 16 // Set the maximum value for the x-axis
    },
  yAxis: [{
    title: {
      text: '%',
      rotation: 0,
    },
    labels: {
      format: '{value}',

    },
    opposite: false
  }],
  tooltip: {
    shared: true
  },
  exporting: {
    enabled:false
  },
  credits: {
    enabled:false
  },
  legend: {
    align: 'right',
    verticalAlign: 'bottom',
    layout: 'horizontal',
    borderWidth: 0,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor
  },
  series: [{
    name: 'Economic Growth (GDP, ann. var. %)',
    type: 'column',
    yAxis: 0,
    color:'#013058',
    borderRadius: '33%',

    data: [2.7, 2.5, 2.3, 1.6, 0.9, 0.5, 0.7, 3.0, 2.2, 7.2, 12.1, 8.1, 11.0, 13.3, 18.7, 2.5, -3.2],
    tooltip: {
      valueSuffix: ''
    }
  }, {
    name: 'Economic Growth (GDP, qoq s.a. var. %)',
    type: 'spline',
    yAxis: 0,
    color:'#6ac8ed',
    lineWidth: 4,
    data: [0.8, 0.8, 0.7, 0.6, 0.6, 0.5, 0.1, 1.4, 0.4, 0.3, 0.9, 0.7, 5.3, 4.8, -2.8, 3.4, 7.5],
    tooltip: {
      valueSuffix: ''
    }
  }]
});
