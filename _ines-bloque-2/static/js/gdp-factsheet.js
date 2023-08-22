
Highcharts.chart('piechart', {
  chart: {
    type: 'variablepie'
  },
  title: {
    text: '',
    align: 'center',
    verticalAlign: 'middle',
    x: 2.5,
    style: {
      fontSize: '13px'
    }
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Share of Region GDP: <b>{point.y}%</b><br/>'
  },
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [{
    minPointSize: 10,
    innerSize: '45%',
    zMin: 0,
    name: 'countries',
    borderRadius: 4,
    data: [{
      name: 'Colombia',
      y: 6.2,
      z: 200
    }, {
      name: 'Brazil',
      y: 32,
      z: 100
    }, {
      name: 'Mexico',
      y: 25.7,
      z: 100
    }, {
      name: 'Argentina',
      y: 9.7,
      z: 100
    }, {
      name: 'Chile',
      y: 6.3,
      z: 100
    }, {
      name: 'Other',
      y: 20.1,
      z: 100
    }],
    colors: [
      '#F9B855',
      '#013058',
      '#3D6389',
      '#95B3D7',
      '#B9CDE5',
      '#DCE6F2'

    ],
    dataLabels: {
      enabled: false,
      format: '<b>{point.name}</b><br> {point.percentage:.1f}%',
      distance: 10, // Set the distance to move labels inside the pie
      connectorShape: 'crookedLine',
      fontSize: '4px'
    }
  }]
});
