import type { ApexOptions } from 'apexcharts'


export const ITEMS_RESULT = [
  'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles',
  'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles',
]

export type CartDataType = {
  title: string
  subtitle: string
  amount: string
}

export const CARD_INDICATORS: CartDataType[] = [
  {
    title: 'Revenue',
    subtitle: 'This describes variable two and what the shown data means',
    amount: '$12,500',
  },
  {
    title: 'Expenses',
    subtitle: 'This Month',
    amount: '$7,200',
  },
  {
    title: 'Profit',
    subtitle: 'This Month',
    amount: '$5,300',
  },
  {
    title: 'Growth',
    subtitle: 'Compared to last month',
    amount: '+8%',
  },
]

export const CHART_CONFIG: { series: { name: string; data: number[] }[]; options: ApexOptions } = {
  series: [
    {
      name: 'Series 1',
      data: [35, 41, 62, 42, 13, 18, 29],
    },
  ],
  options: {
    chart: {
      toolbar: { show: false },
      events: {
        click: function (event, chartContext, opts) {
          console.log(event, chartContext, opts)
          console.log(opts.config.series[opts.seriesIndex].data[opts.dataPointIndex])
        },
      },
    },
    tooltip: {
      theme: 'dark',
      y: [
        {
          title: {
            formatter: function (val) {
              return val + '% above average'
            },
          },
        },
      ],
      style: {
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
    },
    grid: {
      borderColor: '#525252',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5],
      curve: 'straight',
      dashArray: [0],
      colors: ['#C8E972'],
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
      },
    },
    markers: {
      size: 5,
      hover: {
        sizeOffset: 2,
      },
      colors: ['#C8E972'],
    },
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      labels: {
        style: {
          colors: '#FDFDFDFD',
          fontSize: '18px',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return '$' + val + 'K'
        },
        style: {
          colors: '#FDFDFDFD',
          fontSize: '14px',
        },
      },
    },
  },
}
