import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PieChartWidget from './components/widgets/PieChartWidget';
import './index.css';
import KPICard from './components/widgets/KPICard';
import RealTimeLineChart from './components/widgets/RealTimeLineChart';
import DateRangeSelector from './components/DateRangeSelector';
import BarChartWidget from './components/widgets/BarChartWidget';
import { store } from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <Provider store={store}>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 bg-gray-100 dark:bg-gray-800">
            <Header />
            <main className="p-6 space-y-6">
              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Revenue" value="$12,345" growth={'+5%'} />
                <KPICard title="Users" value="1,234" growth={'+10%'} />
                <KPICard title="Sales" value="567" growth={'-3%'} />
                <KPICard title="Performance" value="85%" growth={'+7%'} />
              </div>

              {/* Chart Rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RealTimeLineChart />
                <PieChartWidget />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <BarChartWidget />
                <DateRangeSelector />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
