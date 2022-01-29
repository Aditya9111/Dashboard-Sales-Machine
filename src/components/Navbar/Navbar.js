import React, { useState } from "react";
import Avatar from "react-avatar";
import logo from "../../assets/logo.png";
import Icon1 from "../../assets/navbaricon1.svg";
import Icon2 from "../../assets/navbaricon2.svg";
import AvatarImage from "../../assets/avatar.png";
import ProfileInfo from "../Profile/Profile";
import Topics from "../Topics/Topics";
import Contact from "../Contact/Contact";
import Additional from "../Additional/Additional";
import { MdEmail, MdCall, MdChatBubble, MdClose } from "react-icons/md";
import { IoMdVideocam, IoMdCalendar } from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import "./Navbar.scss";

const NavBar = ({ togglefunction1, togglefunction2, togglefunction3 }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} color="#fff" />
        </div>

        <div className="heading">
          <div>
            <img src={logo} className="logo" alt="logo-img" />
          </div>
          <div>
            <p className="heading-text">Sales Machine</p>
          </div>
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

      <>
        <div className={sidebar ? "profile-sidebar active" : "profile-sidebar"}>
          <div className="close">
            <MdClose size={25} onClick={showSidebar} />
          </div>
          <ProfileInfo />

          <Topics />

          <Contact
            email={"j.najnudel@ringover.com"}
            phone1={"+33 07 55 35 23 21"}
            phone2={"+33 99 53 05 19 21"}
          />

          <Additional
            email={"president@ringover.com"}
            linkUrl={"www.youtube.com/ringover"}
            language={"Français"}
            time={"Indian Standard (+5:30)"}
          />

          <div className="call-to-action">
            <div className="circle">
              <MdCall size={18} />
            </div>
            <div className="tabs-button">
              <div className="tabs-icons">
                <IoMdVideocam />
              </div>
              <div className="tabs-icons">
                <IoMdCalendar onClick={togglefunction1} />
              </div>
              <div className="tabs-icons">
                <MdEmail onClick={togglefunction2} />
              </div>
              <div className="tabs-icons">
                <MdChatBubble onClick={togglefunction3} />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NavBar;
