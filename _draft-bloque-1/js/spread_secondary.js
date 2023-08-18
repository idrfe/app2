const period1ScatterData_secondary = [{
    x: 1,
    y: 3,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 6,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 3.43,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 5.05,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 7.14,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 3.9,
    sourcename: 'ANZ'
  }, {
    x: 1,
    y: 2,
    sourcename: 'ANZ'
  }]; // Data for period 1 (scatter plot)
  const period2ScatterData_secondary = [{
      x: 2,
      y: 4,
      sourcename: 'ANZ'
    }, {
      x: 2,
      y: 7,
      sourcename: 'ANZ'
    },
    {
      x: 2,
      y: 4.4,
      sourcename: 'ANZ'
    }, {
      x: 2,
      y: 4.9,
      sourcename: 'ANZ'
    }, {
      x: 2,
      y: 1.4,
      sourcename: 'ANZ'
    }, {
      x: 2,
      y: 3.9,
      sourcename: 'ANZ'
    }, {
      x: 2,
      y: 2,
      sourcename: 'ANZ'
    }
  ]; // Data for period 2 (scatter plot)
  
  function addJitterToData(data, jitterAmount) {
    return data.map(point => ({
      x: point.x + (Math.random() - 0.5) * jitterAmount,
      y: point.y,
      sourcename: point.sourcename
    }));
  }
  
  
  // Create the chart
  Highcharts.chart('spread-container-secondary', {
    chart: {
      backgroundColor: '#eaeaea'
    },
    credits: {
      enabled: false // Disable the Highcharts footnote
    },
    title: {
      text: ''
    },
    xAxis: {
      title: {
        text: 'Panel Spread'
      },
      tickPositions: [1, 2], // Set the desired x-axis values (with margins)
      labels: {
        formatter: function() {
          return this.value === 1 ? '2023' : this.value === 2 ? '2024' : ''; // Custom x-axis labels
        }
      },
      min: 0.75, // Start the x-axis at 0 (left margin)
      max: 2.25,
      lineColor: 'transparent',
      // End the x-axis at 3 (right margin)
    },
    yAxis: {
      title: {
        text: ''
      },
  
    },
    plotOptions: {
      scatter: {
        marker: {
          symbol: 'circle',
          radius: markerSize
        }
      }
    },
    legend: {
      layout: 'vertical', // Set the legend layout to vertical
      align: 'right', // Align the legend to the right
      verticalAlign: 'middle', // Center the legend vertically
      symbolRadius: 4 // Set the size of the legend symbols to match the scatter plot symbols
    },
    tooltip: {
  
      formatter: function() {
        return `Source: ${this.point.sourcename}<br>Value: ${this.point.y}`;
      },
      style: {
        opacity: 1 // Set the desired opacity value (0.8 in this example)
      },
  
    },
    series: [{
        type: 'scatter', // Scatter plot for period 1
        name: '2023',
        axis: 0,
        data: addJitterToData(period1ScatterData, jitteramount)
      },
      {
        type: 'scatter', // Scatter plot for period 2
        name: '2024',
        axis: 0,
        data: addJitterToData(period2ScatterData, jitteramount)
      }
    ]
  });
  