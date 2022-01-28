import React, { useState } from "react";
import NavBar from "../Navbar/Navbar";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} color="#fff" />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="iconText">
              <p className="navText">Term</p>
              <p className="navTextWeight">Monitor</p>
            </div>
            <AiIcons.AiOutlineClose color="#fff" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
