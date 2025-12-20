import React, { useState } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const background = () => {
        if (progress < 40) return "red";
        if (progress < 80) return "orange";
        else return "green";
    }
    return (
        <div>
            <h1>Progress Bar</h1>
            <p>{progress}%</p>

            <div
                style={{
                    width: "300px",
                    height: "20px",
                    backgroundColor: "#ddd",
                    marginBottom: "10px"
                }}
            >
                <div id="testBgColor"
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: background()
                    }}
                />
            </div>
            <button onClick={()=>setProgress((prev)=>Math.max(prev-10,0))}>-10%</button>
                <button onClick={()=>setProgress((prev)=>Math.min(prev+10,100))}>+10%</button>
        </div>
    );
}

export default ProgressBar;
