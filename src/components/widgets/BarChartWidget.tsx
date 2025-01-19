import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const barData = [
  { month: 'Jan', target: 4000, actual: 3900 },
  { month: 'Feb', target: 3500, actual: 3700 },
  { month: 'Mar', target: 3000, actual: 3200 },
  { month: 'Apr', target: 4500, actual: 4300 },
  { month: 'May', target: 4000, actual: 4200 },
];

const BarChartWidget: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold dark:text-white">Monthly Sales</h3>
      <BarChart width={400} height={300} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="target" fill="#8884d8" />
        <Bar dataKey="actual" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BarChartWidget;
