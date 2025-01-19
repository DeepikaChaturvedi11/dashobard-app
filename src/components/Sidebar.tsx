import React, { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaBars,
  FaTachometerAlt,
  FaChartPie,
  FaDollarSign,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`transition-width duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      } sm:w-16 md:w-64 lg:w-64 bg-white dark:bg-gray-900 h-screen shadow-lg flex flex-col pt-4`}
    >
      <div className="flex items-center p-4 space-x-2">
        <FaTachometerAlt className="text-gray-700 dark:text-gray-300 text-2xl" />
        {!collapsed && (
          <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Dashboard
          </span>
        )}
      </div>

      <button
        aria-label="Toggle Sidebar"
        className="p-4 text-gray-700 dark:text-gray-300 focus:outline-none md:hidden"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>

      <nav className="mt-4 flex-1">
        <ul className="space-y-4">
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer	">
            <FaHome className="mr-4" />
            {!collapsed && "Home"}
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer	">
            <FaChartBar className="mr-4" />
            {!collapsed && "Reports"}
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer	">
            <FaCog className="mr-4" />
            {!collapsed && "Settings"}
          </li>

          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer	">
            <FaChartPie className="mr-4" />
            {!collapsed && "Overview"}
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer	">
            <FaDollarSign className="mr-4" />
            {!collapsed && "Revenue"}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
