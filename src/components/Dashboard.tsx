import React, { Suspense } from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Widget from "../components/Widget";
const LineChart = React.lazy(() => import("./widgets/RealTimeLineChart"));
const PieChartWidget = React.lazy(() => import("./widgets/PieChartWidget"));
const Dashboard: React.FC = () => {
  return (
    <div className="dark">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 min-h-screen">
          <Header />
          <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Widget title="Revenue" />
            <Widget title="Sales" />
            <Widget title="Users" />
            <Widget title="Performance" />
            <Suspense fallback={<div>Loading...</div>}>
              <LineChart />
              <PieChartWidget />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
