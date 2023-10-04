import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";
import AddTask from "./components/AddTask/AddTask"
import EditTask from "./components/EditTask/EditTask";
import "./App.css";
import Signup from "./components/Auth/SignUp/Signup"
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword"
import ChangePassword from "./components/Auth/ChangePaswaord/ChangePassword"
import Login from "./components/Auth/Login/Login";
import { useSelector } from "react-redux";

function App() {
  console.log("App render===");
  const access_token = useSelector((store) => store?.auth?.access_token);
  const user = useSelector((store) => store?.auth?.user);
  const userName = user?.userName;
  return (
    <>
      {access_token ? (
        <>
          <div className="container">
            <div className="topbar grid-item">
              <div className="logo">
                <img className="logo-tab" src={logo} alt="Task tracker logo" />
                <h3>TaskTacker</h3>
              </div>
              <div className="profile">
                <Profile name={userName} />
              </div>
            </div>
            <div className="sidebar grid-item">
              <Sidebar />
            </div>
            <div className="content grid-item">
              <Routes>
                <Route index element={<Tasks />} />
                <Route path="completed" element={<Completed />} />
                <Route path="pending" element={<Pending />} />
                <Route path="addtask" element={<AddTask />} />
                <Route path="edittask" element={<EditTask />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ResetPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      )}
    </>
  );
}

export default App;
