import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import { RootState } from '../../store/store';
import { setDate } from '../../store/chartSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWidget: React.FC = () => {
  const dispatch = useDispatch();
  const pieData = useSelector((state: RootState) => state.chart.pieData);
  const selectedDate = useSelector((state: RootState) => state.chart.date);

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const dateString = date.toISOString().split('T')[0];
      const selectedYear = date.getFullYear(); 

      dispatch(setDate(dateString)); 
      console.log('Selected Year:', selectedYear);

    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 shadow-md rounded-lg flex flex-col items-center h-[400px]">
    <div className="w-full flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold dark:text-white">Customer Segments</h3>
      <div className="relative">
        <DatePicker
          selected={selectedDate ? new Date(selectedDate) : null} 
          onChange={handleDateChange}
          className="p-2 text-center border border-gray-300 rounded-lg w-28 sm:w-36 md:w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Date"
        />
      </div>
    </div>
    <div className="flex justify-center items-center w-full">
      <PieChart width={400} height={300}>
        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </div>
  
  );
};

export default PieChartWidget;
