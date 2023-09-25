import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import "./Signup.css";
import { signup } from "../../../Store/Thunks/authThunk";

function Signup() {
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormData = (e) => {
    if (e.target.getAttribute("name") == "name") {
      setformData({
        ...formData,
        name: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "email") {
      setformData({
        ...formData,
        email: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "password") {
      setformData({
        ...formData,
        password: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "confirmPassword") {
      if(formData.password != e.target.value){
        console.log(formData.password)
        e.target.style.color = "red"
      } else{
      e.target.style.color = ""}
      setformData({
        ...formData,
        confirmPassword: e.target.value,
      });
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(formData)).then(() => {
      console.log(e.target.reset())
    })
    console.log("formdata", formData);
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={(e) => handleSignup(e)}>
        <h3 className="title">Signup</h3>
        <div className="name-control">
          <input
            name="name"
            type="text"
            onChange={(e) => handleFormData(e)}
            placeholder="Enter Name"
          />
        </div>
        <div className="email-control">
          <input
            name="email"
            onChange={(e) => handleFormData(e)}
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="password-control">
          <input
          className="sss"
            name="password"
            onChange={(e) => handleFormData(e)}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="confirmPassword-control">
          <input
            name="confirmPassword"
            onChange={(e) => handleFormData(e)}
            type="password"
            placeholder="Enter confirmPassword"
          />
        </div>
        <div className="submit">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
