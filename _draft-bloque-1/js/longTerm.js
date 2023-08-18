Highcharts.chart('long-term', {
  chart: {
      margin:22.5,
      marginBottom:45,
      marginLeft:45// Set the right margin to create extra space
    },
    title: {
      text: '',
      align: 'left'
    },
    yAxis: [{ 
    // Add explicit Y-axis configuration
      title: {
        text: '',
        
      },
      labels: {
        style:{
        fontSize:12,
        }
      },
      gridLineWidth: 0.5, // Set grid line width (optional)
      gridLineColor: 'rgb(210,210,210)',
      // Set the gridlines color
    }],
    xAxis: {
    plotBands: [
        {
          from: 10, 
          to: 16,
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
      legend: {
      itemStyle:{
      fontSize:11,
      },
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      floating: true, // Set the legend to be floating inside the chart area
      backgroundColor: 'transparent',
      x: -50, // Set the horizontal position of the legend
      y: -50, // Set the vertical position of the legend// Optional: Set a background color for the legend
    },
      series: [
      {
        type: 'spline',
        name: 'Colombia',
        data: [-3.214831480209, 2.4819198870637, 18.6988698881439, 13.2919607931745, 11.0025219146788, 8.05127313175711, 12.0545837946793, 7.23460589260074, 2.18929138018613, 2.96300014605795, 1.14657579931522, 0.676302977358212, 0.648685981752467, 0.518603434252814, 1.62520563825314, 2.431953846735, 3.01449377409144],
        lineWidth: 6,
        marker:{
          enabled:false
        },
        color: '#013058',
      },
      {
        type: 'spline',
        name: 'Latin America',
        data: [-2.26770976166583, 0.467399421526712, 17.8641874033992, 7.5997267088294, 4.56592159851279, 3.80446044983893, 4.41808138434487, 4.07057848845453, 2.23075217615687, 1.38194447247378, 0.818871517910374, 0.968900521160734, 0.703589538388843,1.47069977395855, 2.01942320195749,2.48165945911238, 2.6],
        lineWidth: 6,
        marker:{
          enabled:false
        },
        color: '#6ac8ed', // You can set a different color for the second series
      },
    ],
    
    
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
    // Add the plot line configuration for the vertical tick lines
    plotOptions: {
      series: {
        pointStart: 0 // Set the pointStart to 0 for linear type x-axis
      }
    },
    credits :{
    enabled:false
    },
    exporting: {
    enabled:false
    }
  });