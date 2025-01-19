import React, { useState } from 'react';
import { FaHome, FaChartBar, FaCog, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} bg-white dark:bg-gray-900 h-screen shadow-lg flex flex-col`}
    >
      <button
        className="p-4 text-gray-700 dark:text-gray-300 focus:outline-none md:hidden"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>
      <nav className="mt-4 flex-1">
        <ul className="space-y-4">
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <FaHome className="mr-4" />
            {!collapsed && 'Home'}
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <FaChartBar className="mr-4" />
            {!collapsed && 'Reports'}
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
            <FaCog className="mr-4" />
            {!collapsed && 'Settings'}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
