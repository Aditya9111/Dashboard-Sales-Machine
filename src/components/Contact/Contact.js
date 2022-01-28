import React from "react";
import { MdEmail, MdCall } from "react-icons/md";

const Contact = ({ email, phone1, phone2 }) => {
  return (
    <div className="contacts">
      <text className="topic-text">Contacts</text>

      <div className="contact-data">
        <div className="contact-card">
          <MdEmail />
          <text className="contact-card-data">{email}</text>
        </div>
        <div className="contact-card">
          <MdCall />
          <text className="contact-card-data">{phone1}</text>
          <text className="contact-card-data-type">Primary</text>
        </div>
        <div className="contact-card">
          <MdCall />
          <text className="contact-card-data">{phone2}</text>
        </div>
      </div>
    </div>
  );
};

export default Contact;
