import { createSlice } from '@reduxjs/toolkit';
import { addTask } from '../Thunks/taskThunk';
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    access_token: localStorage.getItem('access_token'),
    task: null,
    isLoading: false,
    error: null,
    successMsg: '',
    errorMsg: '',
  },
  extraReducers(builder) {
    //signup reducers
    builder.addCase(addTask.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });
  },
  extraReducers(builder) {
    //signup reducers
    builder.addCase(getTask.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });
  },
  extraReducers(builder) {
    //signup reducers
    builder.addCase(getTasks.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });
  },
  extraReducers(builder) {
    //signup reducers
    builder.addCase(deleteTask.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });
  },
});
export const taskReducer = taskSlice.reducer;