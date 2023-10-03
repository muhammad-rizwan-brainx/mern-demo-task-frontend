import React from "react";
import "./Profile.css";
import profilepic from "../../assets/asdf.png";
import {useSelector } from "react-redux";
const Profile = (props) => {
  console.log(props)
  return (
    <div className="profile">
      <div>
        <img src={profilepic} alt="" />
      </div>
      <div className="username">{props.name}</div>
    </div>
  );
};

export default Profile;
