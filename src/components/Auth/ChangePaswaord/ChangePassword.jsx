import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changepassword } from "../../../Store/Thunks/authThunk";
import "./ChangePassword.css";

function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    resetPasswordToken: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormData = (e) => {
    
    if (e.target.getAttribute("name") == "reset-token") {
      setFormData({
        ...formData,
        resetPasswordToken: e.target.value,
      });
    }

    if (e.target.getAttribute("name") == "password") {
      setFormData({
        ...formData,
        password: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "confirmPassword") {
      if (formData.password != e.target.value) {
        console.log(formData.password);
        e.target.style.color = "red";
      } else {
        e.target.style.color = "";
      }
      setFormData({
        ...formData,
        confirmPassword: e.target.value,
      });
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    dispatch(changepassword(formData))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        alert("change password error");
        console.log("error change password");
      });
  };

  return (
    <div className="changepassword-container">
      <form
        className="changepassword-form"
        onSubmit={(e) => {
          handleChangePassword(e);
        }}
      >
        <h3 className="title">Change Password</h3>
        <div className="reset-token-control">
          <input
            name="reset-token"
            type="text"
            placeholder="Enter Reset Token"
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <div className="password-control">
          <input
            name="password"
            type="password"
            placeholder="Enter New Password"
            onChange={(e) => handleFormData(e)}
          />
        </div>
        <div className="confirmPassword-control">
          <input
            name="confirmPassword"
            type="password"
            onChange={(e) => handleFormData(e)}
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
