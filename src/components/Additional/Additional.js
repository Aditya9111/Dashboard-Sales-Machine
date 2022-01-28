import React from "react";
import "./Additional.scss";
import "../../pages/Home/Home.scss";
import { MdEmail } from "react-icons/md";
import { IoLanguage, IoLink, IoEarth } from "react-icons/io5";

const Additional = ({ email, language, linkUrl, time }) => {
  return (
    <div className="contacts">
      <text className="topic-text">Additional</text>

      <div className="contact-data">
        <div className="contact-card">
          <MdEmail />
          <text className="contact-card-data">{email}</text>
        </div>
        <div className="contact-card">
          <IoLanguage />
          <text className="contact-card-data">{language}</text>
        </div>
        <div className="contact-card">
          <IoLink />
          <text className="contact-card-data">{linkUrl}</text>
        </div>
        <div className="contact-card">
          <IoEarth />
          <text className="contact-card-data">{time}</text>
        </div>
      </div>
    </div>
  );
};

export default Additional;
