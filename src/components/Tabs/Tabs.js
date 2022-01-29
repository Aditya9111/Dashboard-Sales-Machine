import { useState } from "react";
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
              className={label === activeTab ? "tab-bar-active" : "tab-bar"}
              key={label}
            >
              <p className="a-tag" onClick={(e) => handleClick(e, label)}>
                <div className="tab-bar-inside">
                  <div className="tab-label">{label} </div>
                  <div>
                    <IoMdClose
                      color="white"
                      onClick={tab.props.togglefunction}
                    />
                  </div>
                </div>
              </p>
            </li>
          );
        })}
      </ul>
      {children.map((child) => {
        if (child.props.label === activeTab)
          return (
            <div key={child.props.label} className="content">
              {child.props.children}
            </div>
          );
        else return null;
      })}
    </div>
  );
};

export default Tabs;
