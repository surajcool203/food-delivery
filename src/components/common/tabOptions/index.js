import React from "react";
import "./tabOption.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: "https://cdn-icons-png.flaticon.com/512/1288/1288263.png",
    backdrop: "#E5F3F3",
    inactive_image: "https://cdn-icons-png.flaticon.com/512/1288/1288356.png",
  },
  {
    id: 2,
    name: "DiningOut",
    active_img: "https://cdn-icons-png.flaticon.com/512/857/857718.png",
    backdrop: "#EDf4FF",
    inactive_image: "https://cdn-icons-png.flaticon.com/512/857/857681.png",
  },
  {
    id: 3,
    name: "NightLife",
    active_img: "https://cdn-icons-png.flaticon.com/512/3580/3580675.png",
    backdrop: "FCEEC0",
    inactive_image: "https://cdn-icons-png.flaticon.com/512/3580/3580661.png",
  },
];
const TabOption = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-option">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`tab-item absolute-center cur-po ${
                activeTab === tab.name && "active-tab"
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === tab.name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  className="tab-image"
                  alt={tab.name}
                  src={
                    activeTab === tab.name ? tab.active_img : tab.inactive_image
                  }
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabOption;
