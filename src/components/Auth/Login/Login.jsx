import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Thunks/authThunk";
import './Login.css'

function Login() {
  const dispatch = useDispatch();
  const {formData, setFormData} = useState({
    email: "",
    password: ""
  })
  const handleFormData = (e) => {
    if (e.target.getAttribute("name") == "email") {
      setFormData({
        ...formData,
        email: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "password") {
      setFormData({
        ...formData,
        password: e.target.value,
      });
    }
    }
    const handleLogin = (e)=>{
      e.prevenDefault();
      dispatch(login(formData)).then(()=>{
        e.target.reset();
      })
    }
  return (
    <div className="login-container">
      <form className="login-form">
        <h3 className="title">Login</h3>
        <div className="email-control">
          <input name="email" type="email" onChange={(e)=>handleFormData(e)} placeholder="Enter Email" />
        </div>
        <div className="password-control">
          <input name="password" type="password" onChange={(e)=>handleFormData(e)} placeholder="Enter Password" />
        </div>
        <div className="submit">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
