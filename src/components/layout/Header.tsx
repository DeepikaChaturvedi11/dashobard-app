import React, { useState, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">Overview</h1>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-700 dark:text-gray-300">
          <FaBell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <FaUserCircle size={24} />
            <span>John Doe</span>
          </button>

          <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg w-48 group-hover:block hidden">
            <ul className="space-y-2 p-2">
              <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-blue-500 text-white dark:bg-blue-700 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
