import React, { useState } from "react";
import "./Home.scss";
import NavBar from "../../components/Navbar/Navbar";
import Workspace from "../../assets/workspace.svg";
import { MdEmail, MdCall, MdChatBubble } from "react-icons/md";
import { IoMdVideocam, IoMdCalendar } from "react-icons/io";
import Tabs from "../../components/Tabs/Tabs";
import Additional from "../../components/Additional/Additional";
import Activity from "../../components/Activity/Activity";
import Content from "../../components/Content/Content";
import ProfileInfo from "../../components/Profile/Profile";
import Contact from "../../components/Contact/Contact";
import Topics from "../../components/Topics/Topics";

const Home = () => {
  // const filterWorkspace = (typeofWorkspace) => {
  //   const found = links.find((element) => (element.id = typeofWorkspace));

  //   const data = link.filter((linkdata) => {
  //     if (found["id"] !== typeofWorkspace)
  //       return linkdata.id === typeofWorkspace;
  //     else return;
  //   });

  //   if (data.length !== 0) {
  //     links.push(data);
  //   }
  //   console.log(links);
  // };

  const [toggletab1, settoggletab1] = useState(false);
  const [toggletab2, settoggletab2] = useState(false);
  const [toggletab3, settoggletab3] = useState(false);

  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <div className="info-container">
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
                <IoMdCalendar
                  onClick={() => {
                    settoggletab1(!toggletab1);
                  }}
                />
              </div>
              <div className="tabs-icons">
                <MdEmail
                  onClick={() => {
                    settoggletab2(!toggletab2);
                  }}
                />
              </div>
              <div className="tabs-icons">
                <MdChatBubble
                  onClick={() => {
                    settoggletab3(!toggletab3);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ///////////////////////// Workspace  ///////////////////////////////////////// */}

        <div className="workspace">
          <div>
            <text className="topic-text">Workspace</text>
          </div>

          {toggletab1 || toggletab2 || toggletab3 ? (
            <Tabs>
              {toggletab1 ? (
                <div label="Mail">
                  <Content />
                </div>
              ) : (
                <div label=""></div>
              )}

              {toggletab2 ? (
                <div label="Mail - Invitation to join o...">
                  <h2>Your mails</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec neque sapien, venenatis sit amet dapibus in, luctus a
                    felis. In feugiat risus nec magna auctor sollicitudin. Morbi
                    volutpat volutpat nibh eget ornare.
                  </p>
                </div>
              ) : (
                <div label=""></div>
              )}

              {toggletab3 ? (
                <div label="Mail - Compose">
                  <h2>Compose Mail</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec neque sapien, venenatis sit amet dapibus in, luctus a
                    felis. In feugiat risus nec magna auctor sollicitudin. Morbi
                    volutpat volutpat nibh eget ornare.
                  </p>
                </div>
              ) : (
                <div label=""></div>
              )}
            </Tabs>
          ) : (
            <div className="empty-workspace">
              <img
                src={Workspace}
                className="workspace-image"
                alt="workspace"
              />
              <text className="empty-workspace-1">
                Your workspace is empty!
              </text>
              <text className="empty-workspace-2">
                To add a tab, click on any option on your bottom left
              </text>
            </div>
          )}
        </div>

        {/* ///////////////////////////////////////////////// Activity ///////////////////////////// */}

        <div className="activity">
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Home;
