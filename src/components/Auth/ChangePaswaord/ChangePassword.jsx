import React from "react";
import './ChangePassword.css'

function ChangePassword() {
  return (
    <div className="changepassword-container">
      <form className="changepassword-form">
        <h3 className="title">Change Password</h3>
        <div className="reset-token-control">
          <input name="reset-token" type="text" placeholder="Enter Reset Token" />
        </div>
        <div className="password-control">
          <input name="password" type="password" placeholder="Enter New Password" />
        </div>
        <div className="confirmPassword-control">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Enter Password Again"
          />
        </div>
        <div className="submit">
          <button type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
