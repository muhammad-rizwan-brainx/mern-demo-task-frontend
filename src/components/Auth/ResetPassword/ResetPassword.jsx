import React, { useState } from "react";
import { forgotpassword } from "../../../Store/Thunks/authThunk";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './ResetPassword.css'

function Reset() {
  const[email, setEmail] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleReset = (e)=>{
    e.preventDefault();
    dispatch(forgotpassword({email: email})).unwrap().then(()=>{
      navigate("/changepassword");
      console.log("here")
    }).catch(() => {
      alert("Reset error")
      console.log("Reset signup");
    });
  }
  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={(e) => handleReset(e)}>
        <h3 className="title">Reset Password</h3>
        <div className="email-control">
          <input name="email" type="email" onChange={(e)=>{
            setEmail(e.target.value)
          }} placeholder="Enter Email" />
        </div>
        <div className="submit">
          <button type="submit">Get Reset Token</button>
        </div>
      </form>
    </div>
  );
}

export default Reset;
