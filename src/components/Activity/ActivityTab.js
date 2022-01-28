import { useState } from "react";
import "./ActivityTab.scss";

const ActivityTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className="progress-bar">
        <ul className="activity-tabs">
          {children.map((tab) => {
            const label = tab.props.label;
            return (
              <li
                className={label === activeTab ? "progress-active" : "progress"}
                key={label}
              >
                <a
                  href="#"
                  className="activity-tag"
                  onClick={(e) => handleClick(e, label)}
                >
                  <div>
                    <div
                      className={label === activeTab ? "progress-activity" : ""}
                    >
                      {label}{" "}
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {children.map((child) => {
          if (child.props.label === activeTab)
            return (
              <div key={child.props.label} className="content">
                {child.props.children}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default ActivityTab;
