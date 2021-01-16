import { Options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      borderColor: null,
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: 'trend',
  },
  legend: {
    enabled: true,
  },
  series: [
    {
      type: 'pie',
      data: [
        // { name: 'a', y: 1, color: '#eeeeee' },
        // { name: 'b', y: 2, color: '#393e46' },
        { name: 'claim', y: 3, color: '#ebecf0' },
        { name: 'policies', y: 4, color: '#18478b' },
        // { name: 'e', y: 5, color: '#506ef9' },
      ],
    },
  ],
};
