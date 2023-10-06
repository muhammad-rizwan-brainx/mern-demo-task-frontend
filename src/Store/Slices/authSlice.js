import { createSlice } from "@reduxjs/toolkit";
import {
  signup,
  login,
  forgotpassword,
  changepassword,
} from "../Thunks/authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access_token: localStorage.getItem("access_token"),
    user: null,
    isLoading: false,
    error: null,
    successMsg: "",
    errorMsg: "",
  },
  extraReducers(builder) {

    builder.addCase(signup.pending, (state, action) => {
      console.log("pending");
      state.successMsg = "";
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log("fulfilled");
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log("rejected", action.payload);
    });


    builder.addCase(login.pending, (state, action) => {
      console.log("pending");
      state.successMsg = "";
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload.token);
      state.isLoading = false;
      localStorage.setItem("access_token", action.payload.token);
      state.access_token = action.payload.token;
      state.user = action.payload?.user;
      state.successMsg = action.payload?.message;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log("rejected", action.payload);
    });

    builder.addCase(forgotpassword.pending, (state, action) => {
      console.log("pending");
      state.successMsg = "";
      state.isLoading = true;
    });
    builder.addCase(forgotpassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log("fulfilled");
    });
    builder.addCase(forgotpassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log("rejected", action.payload);
    });

    
    builder.addCase(changepassword.pending, (state, action) => {
      console.log("pending");
      state.successMsg = "";
      state.isLoading = true;
    });
    builder.addCase(changepassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log("fulfilled");
    });
    builder.addCase(changepassword.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log("rejected", action.payload);
    });
  },
});
export const authReducer = authSlice.reducer;
