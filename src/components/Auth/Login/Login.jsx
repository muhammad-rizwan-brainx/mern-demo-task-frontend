import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/Thunks/authThunk";
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const message = useSelector((store) => store.auth.successMsg);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("login error");
        console.log("error login");
      });
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <h3 className="title">Login</h3>
        <div className="email-control">
          <input
            name="email"
            type="email"
            onChange={(e) => handleFormData(e)}
            placeholder="Enter Email"
          />
        </div>
        <div className="password-control">
          <input
            name="password"
            type="password"
            onChange={(e) => handleFormData(e)}
            placeholder="Enter Password"
          />
        </div>
        <div className="submit">
          <button type="submit">Login</button>
        </div>
        <NavLink className="signup" to="/signup">
           Signup
        </NavLink>
        <NavLink className="forgot-password" to="/forgotpassword">
           Forgot Password?
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
