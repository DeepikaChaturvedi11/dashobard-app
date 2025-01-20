import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../../store/store";
import { updateRealTimeBarData, setDate } from "../../store/chartSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BarChartWidget: React.FC = () => {
  const dispatch = useDispatch();
  const barData = useSelector((state: RootState) => state.chart.barData);
  const selectedDate = useSelector((state: RootState) => state.chart.date);
  const defaultDate = selectedDate ? new Date(selectedDate) : new Date();
  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        month: "Jan",
        target: Math.random() * 5000,
        actual: Math.random() * 5000,
      };
      dispatch(updateRealTimeBarData(newData));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const dateString = date.toISOString().split("T")[0];
      const selectedYear = date.getFullYear();
      dispatch(setDate(dateString));
      console.log("Selected Year:", selectedYear);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 shadow-md rounded-lg h-[400px]">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-bold dark:text-white">Monthly Sales</h3>
      <div className="relative">
        <DatePicker
          selected={defaultDate}
          onChange={handleDateChange}
          className="p-2 text-center border border-gray-300 rounded-lg w-28 sm:w-36 md:w-40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          dateFormat="dd/MM/yyyy"
          placeholderText="Select Date"
          showMonthDropdown
          showYearDropdown
        />
      </div>
    </div>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="target" fill="#8884d8" />
        <Bar dataKey="actual" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  
  );
};

export default BarChartWidget;
