import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Widget from "../components/Widget";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import RealTimeLineChart from "./widgets/RealTimeLineChart";
const Dashboard: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 min-h-screen">
          <Header />
          <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Widget title="Revenue" />
            <Widget title="Sales" />
            <Widget title="Users" />
            <Widget title="Performance" />
            <RealTimeLineChart />
          </main>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
