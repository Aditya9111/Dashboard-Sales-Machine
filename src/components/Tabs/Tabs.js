import { useState, useEffect } from "react";
import "./Tabs.scss";
import { IoMdClose } from "react-icons/io";
const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  const filter = children.filter((el) => el.props.label !== "");

  return (
    <div className="tab-component">
      <ul className="tabs">
        {filter.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={label == activeTab ? "tab-bar-active" : "tab-bar"}
              key={label}
            >
              <a
                href="#"
                className="a-tag"
                onClick={(e) => handleClick(e, label)}
              >
                <div className="tab-bar-inside">
                  <div>{label} </div>
                  {/* <div>
                    <IoMdClose />
                  </div> */}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((child) => {
        if (child.props.label == activeTab)
          return (
            <div key={child.props.label} className="content">
              {child.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
