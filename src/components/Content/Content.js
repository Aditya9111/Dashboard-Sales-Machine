import React from "react";
import "./Content.scss";
import { MdForward, MdDelete } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

const Content = () => {
  return (
    <div>
      <div className="heading-mail">
        Invitation to join our organisation as a member of the board
      </div>
      <div className="mail-top">
        <div>
          <div className="mail-name">Aymeric Vanbock </div>
          <div className="email">amaud.renet@allaince-info.com</div>
        </div>
        <div>
          <div>Today 10:39AM</div>
          <div className="mail-icons">
            <div>
              <MdForward />
            </div>
            <div>
              <IoIosShareAlt />
            </div>
            <div>
              <MdDelete color="red" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="email-text">
          Greetings,
          <br />
          <br /> hope this message finds you well. I’m reaching out today
          because I’m managing an application redesign project here at ABC
          Company and seeking a skilled UX research contractor to help analyze
          several sets of usability testing data.
          <br />
          <br /> This is a three-month project beginning February 1st, and we
          estimate it will take roughly 15 hours per week. All work can be
          completed remotely, but you’re welcome to use our workspace.
          <br />
          <br /> Please let me know if you’re interested in this project and we
          can set up some time to discuss the details further. I look forward to
          hearing from you.
        </p>
      </div>
    </div>
  );
};

export default Content;
