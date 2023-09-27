import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Completed from '../Completed/Completed'
import Pending from '../Pending/Pending'
import Profile from '../Profile/Profile'
import Sidebar from '../Sidebar/Sidebar'
import logo from "../../assets/logo.png"
import Tasks from '../Tasks/Tasks'
const Layout = () => {
  return (
    <div className="container">
        <div className="topbar grid-item">
            <div className="logo">
                <img
                    className="logo-tab"
                    src={logo}
                    alt="Task tracker logo"
                />
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
            <Route path="completed" exact element={<Completed />} />
            <Route path="dashboard/pending" element={<Pending />} />
            </Routes>
        </div>
      </div>    
  )
}
export default Layout