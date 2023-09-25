import React from "react";
import './ResetPassword.css'

function Reset() {
  return (
    <div className="reset-container">
      <form className="reset-form">
        <h3 className="title">Reset Password</h3>
        <div className="email-control">
          <input name="email" type="email" placeholder="Enter Email" />
        </div>
        <div className="submit">
          <button type="submit">Get Reset Token</button>
        </div>
      </form>
    </div>
  );
}

export default Reset;
