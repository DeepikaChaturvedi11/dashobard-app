import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RealTimeLineChart: React.FC = () => {
  const [data, setData] = useState([
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [...data];
      newData.shift(); 
      newData.push({
        name: `New ${Math.random().toFixed(2)}`,
        revenue: Math.floor(Math.random() * 5000),
      }); 
      setData(newData);
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold dark:text-white">Real-Time Revenue</h3>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default RealTimeLineChart;
