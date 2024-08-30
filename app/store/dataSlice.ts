// store/dataSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface DataState {
  lineChartData: any;
  barChartData: any;
  tableData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
  lineChartData: null,
  barChartData: null,
  tableData: null,
  status: 'idle',
};

// Thunk to fetch mock data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  // Simulate a fetch from a mock API or static data
  const response = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        lineChartData: [12, 19, 3, 5, 2, 3],
        barChartData: [4000, 3000, 2000, 2780, 1890, 2390],
        tableData: [
          { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
          { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
        ],
      });
    }, 1000)
  );
  return response;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.lineChartData = action.payload.lineChartData;
        state.barChartData = action.payload.barChartData;
        state.tableData = action.payload.tableData;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default dataSlice.reducer;
