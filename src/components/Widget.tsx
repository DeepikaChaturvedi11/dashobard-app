import React from 'react';

interface WidgetProps {
  title: string;
}

const Widget: React.FC<WidgetProps> = ({ title }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">Data goes here...</p>
    </div>
  );
};

export default Widget;
