import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import Completed from "./components/Completed/Completed";
import Pending from "./components/Pending/Pending";
import "./App.css";
import Signup from "./components/Auth/SignUp/Signup"
import Login from "./components/Auth/Login/Login";
import { useSelector } from "react-redux";

function App() {
  console.log("App render===");
  const access_token = useSelector((store) => store?.auth?.access_token);
 
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
                <Profile />
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
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </>
  );
}

export default App;
