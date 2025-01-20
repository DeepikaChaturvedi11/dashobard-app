import React, { useState, useEffect } from "react";
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
  const [sidebarVisible, setSidebarVisible] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarVisible(!sidebarVisible);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarVisible(false);
    }
  };

  return (
    <div>
      <div
        className={`transition-all duration-300 ease-in-out fixed md:relative ${
          isMobile && !sidebarVisible ? "w-14" : "w-64"
        } bg-white dark:bg-gray-900 h-screen shadow-lg flex flex-col pt-4 z-50`}
      >
        <div className="flex items-center p-4 space-x-2">
          <FaTachometerAlt className="text-gray-700 dark:text-gray-300 text-2xl" />
          {(!isMobile || sidebarVisible) && (
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
              Dashboard
            </span>
          )}
        </div>

        {isMobile && (
          <button
            aria-label="Toggle Sidebar"
            className="p-4 text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        )}

        <nav className="mt-4 flex-1">
          <ul className="space-y-4">
            {[
              { icon: FaHome, label: "Home" },
              { icon: FaChartBar, label: "Reports" },
              { icon: FaDollarSign, label: "Revenue" },
              { icon: FaChartPie, label: "Overview" },
              { icon: FaCog, label: "Settings" },
            ].map(({ icon: Icon, label }, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
              >
                <Icon className="mr-4" />
                {(!isMobile || sidebarVisible) && <span>{label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMobile && (
        <div
          className={`${
            sidebarVisible ? "block" : "hidden"
          } fixed inset-0 bg-black bg-opacity-50 md:hidden z-40`}
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
