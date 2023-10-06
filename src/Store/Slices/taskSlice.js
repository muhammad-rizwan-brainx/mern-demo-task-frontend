import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, getTask, getTasks, updateTask, completeTask } from '../Thunks/taskThunk';
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    access_token: localStorage.getItem('access_token'),
    task: null,
    tasks:null,
    isLoading: false,
    error: null,
    successMsg: '',
    errorMsg: '',
  },
  extraReducers(builder) {
    
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


    builder.addCase(getTasks.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload?.tasks;
      console.log(state.tasks)
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(getTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.error.message;
      console.log('rejected', action.payload);
    });

    
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


    builder.addCase(completeTask.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(completeTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(completeTask.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });
  }
});
export const taskReducer = taskSlice.reducer;