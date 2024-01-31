import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (value, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(value, index);
  };
  return (
    <div className='switchingTabs'>
      <div className='tabItems'>
        {data.map((value, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectedTab === index ? "active" : ""}`}
              onClick={() => activeTab(value, index)}
            >
              {value}
            </span>
          );
        })}
        <div className='movingBg' style={{ left: left }}></div>
      </div>
    </div>
  );
};

export default SwitchTabs;
