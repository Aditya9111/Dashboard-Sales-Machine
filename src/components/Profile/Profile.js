import React from "react";
import "./Profile.scss";
import Profile from "../../assets/profile-icon.svg";
import Edit from "../../assets/pencil.svg";
import Shield from "../../assets/shield.svg";
import Linkedin from "../../assets/linkedin.svg";
import Cloud from "../../assets/cloud.png";
const ProfileInfo = () => {
  return (
    <div>
      <div className="profile-info">
        <div className="name-container">
          <p className="profile-name">Jean-Samuel Najnudel</p>
          <img src={Edit} className="profile-icon-title-1" alt="icon" />
          <img src={Shield} className="profile-icon-title-2" alt="icon" />
        </div>
        <span className="profile-title">President</span>
        <div className="company">
          <div className="profile-company">Ringover</div>
          <span className="seperate">|</span>
          <div className="profile-icon-flex">
            <img src={Profile} className="profile-icon" alt="icon" />
            <div className="profile-employee">101-250</div>
          </div>
        </div>
        <a href="#" className="profile-link">
          www.ringover.com
        </a>
      </div>
      <div className="app-icon">
        <img src={Linkedin} className="app-icons-1" alt="icon" />
        <img src={Cloud} className="app-icons-2" alt="icon" />
      </div>
    </div>
  );
};

export default ProfileInfo;
