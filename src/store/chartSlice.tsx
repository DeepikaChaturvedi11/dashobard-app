import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ChartData {
  month: string;
  target: number;
  actual: number;
  year?: number;
}
interface PieData {
  name: string;
  value: number;
}

interface ChartState {
  date: string;
  barData: ChartData[];
  pieData: PieData[];
  chartData: { name: string; revenue: number }[];
}
const initialState: ChartState = {
  date: "2025-01-01",
  barData: [
    { month: "Jan", year: 2024, target: 4000, actual: 3900 },
    { month: "Feb", year: 2025, target: 3500, actual: 3700 },
    { month: "Mar", year: 2025, target: 3000, actual: 3200 },
    { month: "Apr", year: 2022, target: 4500, actual: 4300 },
    { month: "May", year: 2025, target: 4000, actual: 4200 },
    { month: "Jun", year: 2025, target: 4700, actual: 4600 },
    { month: "Jul", year: 2025, target: 5200, actual: 5100 },
    { month: "Aug", year: 2021, target: 5500, actual: 5400 },
    { month: "Sep", year: 2025, target: 6000, actual: 5900 },
    { month: "Oct", year: 2025, target: 6500, actual: 6400 },
    { month: "Nov", year: 2025, target: 7000, actual: 6900 },
    { month: "Dec", year: 2025, target: 7500, actual: 7400 },
  ],
  pieData: [
    { name: "Jan 2025", value: 400 },
    { name: "Feb 2024", value: 300 },
    { name: "Mar 2023", value: 300 },
    { name: "Apr 2022", value: 200 },
    { name: "May 2021", value: 150 },
    { name: "Jun 2020", value: 250 },
  ],
  chartData: [
    { name: "Jan 2024", revenue: 4000 },
    { name: "Feb 2025", revenue: 3000 },
    { name: "Mar 2022", revenue: 2000 },
    { name: "Apr 2025", revenue: 2780 },
    { name: "May 2022", revenue: 1890 },
    { name: "Jun 2023", revenue: 2390 },
    { name: "Jul 2025", revenue: 3200 },
    { name: "Aug 2025", revenue: 3500 },
    { name: "Sep 2025", revenue: 4000 },
    { name: "Oct 2025", revenue: 4200 },
    { name: "Nov 2025", revenue: 4500 },
    { name: "Dec 2025", revenue: 4800 },
  ],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    updateBarData: (state, action: PayloadAction<ChartData[]>) => {
      state.barData = action.payload;
    },

    updatePieData: (state, action: PayloadAction<PieData[]>) => {
      state.pieData = action.payload;
    },

    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
      const selectedDate = new Date(action.payload);
      const selectedMonth = selectedDate.toLocaleString("en-US", {
        month: "short",
      });
      const selectedYear = selectedDate.getFullYear();

      state.barData = initialState.barData.filter(
        (data) => data.month === selectedMonth && data.year === selectedYear
      );

      state.chartData = initialState.chartData.filter(
        (data) => data.name === `${selectedMonth} ${selectedYear}`
      );

      state.pieData = initialState.pieData.filter((data) =>
        data.name.includes(`${selectedMonth} ${selectedYear}`)
      );
    },

    setChartData: (
      state,
      action: PayloadAction<{ name: string; revenue: number }[]>
    ) => {
      state.chartData = action.payload;
    },

    updateRealTimeBarData: (state, action: PayloadAction<ChartData>) => {
      state.barData.push(action.payload);
      state.barData = state.barData.slice(-12);
    },

    updateRealTimePieData: (state, action: PayloadAction<PieData>) => {
      const index = state.pieData.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index !== -1) {
        state.pieData[index].value = action.payload.value;
      } else {
        state.pieData.push(action.payload);
      }
    },

    updateRealTimeChartData: (
      state,
      action: PayloadAction<{ name: string; revenue: number }[]>
    ) => {
      state.chartData = action.payload;
    },
  },
});

export const {
  updateBarData,
  updatePieData,
  setDate,
  setChartData,
  updateRealTimeBarData,
  updateRealTimePieData,
  updateRealTimeChartData,
} = chartSlice.actions;

export default chartSlice.reducer;
