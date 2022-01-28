import React from "react";
import { MdUpload, MdPause } from "react-icons/md";
import { IoStop } from "react-icons/io5";
import "./Activity.scss";
import ActivityTab from "./ActivityTab";
import Stepbox from "../Stepbox/Stepbox";
import { MdEmail, MdCall, MdMarkChatUnread } from "react-icons/md";
import { IoMailUnread, IoLogoLinkedin, IoChatbox } from "react-icons/io5";

const Activity = () => {
  return (
    <div>
      <div className="activity-button">
        <div className="salesforce-button">
          <MdUpload />
          <div onClick={() => {}}>Salesforce</div>
        </div>
        <div className="play-button">
          <MdPause />
          <IoStop color="red" />
        </div>
      </div>

      {/* <div className="progress-bar">
        <div className="progress">Task</div>
        <div className="progress-active">
          <text>Activity</text>
        </div>
        <div className="progress">Progress</div>
      </div> */}

      <ActivityTab>
        <div label="Task">
          <div class="container-step">
            <Stepbox
              stepName={"Step 1 : Automated mail"}
              stepIcon={<IoMailUnread color="white" />}
            />
            <Stepbox
              stepName={"Step 2 : Send mail"}
              stepIcon={<MdEmail color="white" />}
            />
            <Stepbox
              stepName={"Step 3 : Call lead"}
              stepIcon={<MdCall color="white" />}
            />
            <Stepbox
              stepName={"Step 4 : Send connection request"}
              stepIcon={<IoLogoLinkedin color="white" />}
            />
            <Stepbox
              stepName={"Step 5 : Automated message"}
              stepIcon={<MdMarkChatUnread color="white" />}
            />
            <Stepbox
              stepName={"Step 6 : Send message"}
              stepIcon={<IoChatbox color="white" />}
            />
          </div>
        </div>
        <div label="Activity">Content 1</div>
        <div label="Progress">
          <div label="Task">Content 2</div>
        </div>
      </ActivityTab>
    </div>
  );
};

export default Activity;
