import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PieChartWidget from './components/widgets/PieChartWidget';
import DraggableWidget from './components/widgets/DraggableWidget';
import './index.css';
import KPICard from './components/widgets/KPICard';
import RealTimeLineChart from './components/widgets/RealTimeLineChart';
import DateRangeSelector from './components/DateRangeSelector';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 bg-gray-100 dark:bg-gray-800">
          <Header />
          <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* KPI Cards */}
            <KPICard title="Revenue" value="$12,345" growth={''} />
            <KPICard title="Users" value="1,234" growth={''} />
            <KPICard title="Sales" value="567" growth={''} />
            <KPICard title="Performance" value="85%" growth={''} />

            {/* Widgets */}
            <RealTimeLineChart />
            <PieChartWidget />
            <DraggableWidget />
            <DateRangeSelector />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
