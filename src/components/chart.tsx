
import { PieChart, Pie, Legend} from 'recharts';
  

const renderColorfulLegendText = (value: string, entry: any) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};
  
function Chart() {
  
// Sample data
const data = [
  {name: 'Luxuo', students: 350, fill: "#0088FE" },
  {name: 'Mens-Folio', students: 700, fill: "#00C49F"},
  {name: 'Grazia', students: 700, fill: "#FF8042"}
];
  
  
return (
        <PieChart width={400} height={300}>
          <Legend
            height={50}
            iconType="circle"
            layout="vertical"
            verticalAlign='middle'
            align="right"
            iconSize={16}
            formatter={renderColorfulLegendText} />
          <Pie data={data} dataKey="students" outerRadius={120} innerRadius={70} />
        </PieChart>
);
}
  
export default Chart;