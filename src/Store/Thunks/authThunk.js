import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIS } from "../axios.config";

const signup = createAsyncThunk("users/signup", async (data, thunkAPI) => {
  try {
    const response = await APIS.post(`/users/signup`, data);

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


const login = createAsyncThunk("users/login", async (data, thunkAPI) => {
  try {
    const response = await APIS.post(`/users/login`, data);
    console.log(response.data)
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

const forgotpassword = createAsyncThunk("users/forgotpassword", async (data, thunkAPI) => {
  try {
    const response = await APIS.put(`/users/forgotpassword`, data);
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

const changepassword = createAsyncThunk("users/changepassword", async (data, thunkAPI) => {
  try {
    const response = await APIS.put(`/users/changepassword`, data);
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


export { signup, login, forgotpassword, changepassword};
