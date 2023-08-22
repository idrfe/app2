// Declare the data separately as an array
const data = [
    { "name": "Venezuela", "y": 141.9, "color": "#80c4e8" },
    { "name": "Argentina", "y": 129.1, "color": "#80c4e8" },
    { "name": "Latin America", "y": 15.9, "color": "#013058" },
    { "name": "Uruguay", "y": 6.4, "color": "#80c4e8" },
    { "name": "Colombia", "y": 5.7, "color": "#DC143C" },
    { "name": "Brazil", "y": 4.3, "color": "#80c4e8" },
    { "name": "Mexico", "y": 4.1, "color": "#80c4e8" },
    { "name": "Bolivia", "y": 3.9, "color": "#80c4e8" },
    { "name": "Paraguay", "y": 3.9, "color": "#80c4e8" },
    { "name": "Chile", "y": 3.7, "color": "#80c4e8" },
    { "name": "Peru", "y": 3.4, "color": "#80c4e8" },
    { "name": "Ecuador", "y": 2.4, "color": "#80c4e8" }
  ];
  
  // Extract the categories from the data array
  const categories = data.map(item => item.name);
  
  Highcharts.chart('region-container', {
    chart: {
      type: 'bar',
      backgroundColor: 'transparent'
    },
    title: {
      text: '',
      align: 'center'
    },
    xAxis: {
      categories: categories,
      title: {
        text: null
      },
      gridLineWidth: 0,
      lineWidth: 0
    },
    yAxis: {
      visible: false,
      type: 'logarithmic',
      tickAmount: 5,
      title: {
        text: 'Inflation, aop.',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      },
      gridLineWidth: 0
    },
    plotOptions: {
      bar: {
        borderRadius: '33%',
        dataLabels: {
          enabled: true
        },
        groupPadding: 0.1
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'average of period',
      data: data
    }]
  });
  