import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangeSelector: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold dark:text-white">Select Date Range</h3>
      <div className="flex space-x-4 mt-2">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date ?? undefined)} 
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date ?? undefined)} // Ensure null is converted to undefined
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;
