import React from "react";
import Avatar from "react-avatar";
import logo from "../../assets/logo.png";
import Icon1 from "../../assets/navbaricon1.svg";
import Icon2 from "../../assets/navbaricon2.svg";
import AvatarImage from "../../assets/avatar.png";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <img src={logo} className="logo" alt="logo" />
        <p className="heading-text">Sales Machine</p>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="avatar">
        <Avatar
          className="avatar-image"
          size="30"
          facebook-id="invalidfacebookusername"
          src={AvatarImage}
          round={true}
        />
        <img src={Icon1} className="navbaricon" alt="logo" />
        <img src={Icon2} className="navbaricon" alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
