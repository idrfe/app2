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
      categories: ['Venezuela', 'Argentina', 'Latin America', 'Uruguay','Colombia',
      'Brazil','Mexico','Bolivia','Paraguay','Chile','Peru','Ecuador'],
      title: {
          text: null
      },
      gridLineWidth: 0,
      lineWidth: 0
  },
  yAxis: {
  visible:false,
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
      enabled:false,
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
   series: [
  {
    name: 'average of period',
    data: [
      { y: 141.9, color: '#80c4e8' }, // Color for Venezuela
      { y: 129.1, color: '#80c4e8' }, // Color for Argentina
      { y: 15.9, color: '#013058' }, //...
      { y: 6.4, color: '#80c4e8' }, 
      { y: 5.7, color: '#DC143C' }, 
      { y: 4.3, color: '#80c4e8' },
      { y: 4.1, color: '#80c4e8' },
      { y: 3.9, color: '#80c4e8' }, 
      { y: 3.9, color: '#80c4e8' }, 
      { y: 3.7, color: '#80c4e8' }, 
      { y: 3.4, color: '#80c4e8' }, 
      { y: 2.4, color: '#80c4e8' }, 
       ] 
  },
] } );
