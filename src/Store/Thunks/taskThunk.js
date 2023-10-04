import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIS } from "../axios.config";
import axios from "axios";


const addTask = createAsyncThunk("tasks/addTask", async (data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.post(`/tasks/`, data);

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});

const getTask = createAsyncThunk("tasks/getTask", async (id, data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.post(`/tasks/${id}`, data);

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});

const getTasks = createAsyncThunk("tasks/getTasks", async (thunkAPI) => {
  try {
    const response = await APIS.get(`/tasks/`)
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});

const deleteTask = createAsyncThunk("tasks/deleteTask", async (data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.delete(`/tasks/${data.id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});

const completeTask = createAsyncThunk("tasks/completeTask", async (data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.put(`/tasks/${data.id}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});

const updateTask = createAsyncThunk("tasks/updateTask", async (data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.post(`/tasks/`, data);

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});


export {addTask, getTask, getTasks, deleteTask, updateTask, completeTask};
