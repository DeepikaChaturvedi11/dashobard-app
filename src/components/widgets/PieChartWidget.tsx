import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const pieData = [
  { name: 'Segment A', value: 400 },
  { name: 'Segment B', value: 300 },
  { name: 'Segment C', value: 300 },
  { name: 'Segment D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWidget: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold dark:text-white">Customer Segments</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={pieData}
          cx={200}
          cy={150}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartWidget;
