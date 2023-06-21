import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts'
import { Card } from 'antd'


const renderColorfulLegendText = (value: string, entry: any) => {
  return <span style={{ color: '#596579', fontWeight: 500, padding: '10px' }}>{value}</span>
}

function Chart() {
  
  // Sample data
  const data = [
    { name: 'Luxuo', students: 350, fill: '#0088FE' },
    { name: 'Mens-Folio', students: 700, fill: '#00C49F' },
    { name: 'Grazia', students: 700, fill: '#FF8042' },
  ]

  return (
    <Card bordered={false}>
      <Card.Meta title="Earning By Brand" description="YTD"></Card.Meta>
      <ResponsiveContainer height={260}>
        <PieChart>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={16}
            formatter={renderColorfulLegendText}
          />
          <Pie data={data} dataKey="students" outerRadius={120} innerRadius={70} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default Chart
