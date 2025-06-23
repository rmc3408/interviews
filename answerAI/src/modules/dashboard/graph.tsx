import { useState, type FC } from 'react'
import ReactApexChart from 'react-apexcharts'

type GraphLineProps = {
  config: {
    options: ApexCharts.ApexOptions
    series: ApexAxisChartSeries
  }
}


const GraphLine: FC<GraphLineProps> = ({ config }) => {
  //Save in state in case series change values
  //This is useful if you want to update the chart dynamically
  const [state] = useState(config)

  return (
    <div className="flex-none">
      <h1 className="text-2xl text-white mb-4 text-left">Graph</h1>
      <div className="bg-[#222325] px-2 pt-5 max-w-fit border-solid border-1 border-[#525252] h-max-[760px]">
        <ReactApexChart options={state.options} series={state.series} type="line" width={690} />
      </div>
    </div>
  )
}

export default GraphLine
