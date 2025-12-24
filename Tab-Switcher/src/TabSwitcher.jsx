import React, { useState } from "react";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [active, setActive] = useState('home');
  const activeTabdata = tabs.find(tab => tab.id === active);
  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>
      <div className="tab-buttons">
        {tabs.map(tab => (
          <button key={tab.id}
            data-testid={`tab-button-${tab.id}`}
            onClick={() => {
              if (tab.id !== active) {
                setActive(tab.id);
              }
            }
          }
          className={tab.id===active?"active-tab":"inactive-tab"}
          >{tab.label}</button>
        ))}
      </div>
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {activeTabdata?activeTabdata.content:"Invalid Tab"}
      </div>
    </div>
  );
}
