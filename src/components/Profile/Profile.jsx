import React from "react";
import "./Profile.css";
import profilepic from "../../assets/asdf.png";

const Profile = (props) => {
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
