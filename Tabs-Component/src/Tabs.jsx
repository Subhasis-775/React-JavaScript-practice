import React, { useState } from 'react';
import './styles.css'

function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);
    if (tabs.length === 0) {
        return <div>No tabs available</div>
    }    
    
    return (
        <div>
            <div style={{ display: "flex", cursor: "pointer" }}>
                {tabs.map((tab, index) => (
                <div key={index}
                    style={{ padding: "10px 20px", borderBottom: activeIndex === index ? "2px solid blue" : "none", marginRight: "10px", }}
                    onClick={() => setActiveIndex(index)}>
                    {tab.title|| `Tab ${index+1}`}
                    </div>
    ))}
            </div>
            <div style={{ marginTop: "10px" }}>
            {tabs[activeIndex]?.content||"No content available"}
            </div>
        </div>
    );
}

export default Tabs;