import React from 'react';

interface KPIProps {
  title: string;
  value: string;
  growth: string;
}

const KPICard: React.FC<KPIProps> = ({ title, value, growth }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
      <h3 className="text-sm font-semibold dark:text-gray-300">{title}</h3>
      <p className="text-2xl font-bold dark:text-white">{value}</p>
      <p className={`text-sm ${growth.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
        {growth}
      </p>
    </div>
  );
};

export default KPICard;
