import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/themeSlice';
import { RootState } from '../store';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow-md">
      <h1 className="text-xl font-bold dark:text-white">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-700 dark:text-gray-300">
          <FaBell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
          >
            <FaUserCircle size={24} />
            <span>John Doe</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-48">
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Profile
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </a>
            </div>
          )}
        </div>

        <button
  onClick={() => dispatch(toggleDarkMode())}
  className="bg-blue-500 text-white dark:bg-blue-700 px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 
             sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm md:text-base"
>
  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
</button>

      </div>
    </header>
  );
};

export default Header;
