import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import PieChartWidget from "./components/widgets/PieChartWidget";
import KPICard from "./components/widgets/KPICard";
import LineChart from "./components/widgets/RealTimeLineChart";
import BarChartWidget from "./components/widgets/BarChartWidget";
import "./index.css";
const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <Header />
        <main className="p-6 space-y-6 overflow-auto pl-16 md:pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            <KPICard title="Revenue" value="$12,345" growth={"+5%"} />
            <KPICard title="Users" value="1,234" growth={"+10%"} />
            <KPICard title="Sales" value="567" growth={"-3%"} />
            <KPICard title="Performance" value="85%" growth={"+7%"} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="w-full h-full col-span-2 lg:col-span-1">
              <LineChart />
            </div>
            <div className="w-full h-full col-span-2 lg:col-span-1">
              <PieChartWidget />
            </div>
            <div className="w-full h-full col-span-2 lg:col-span-1">
              <BarChartWidget />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
