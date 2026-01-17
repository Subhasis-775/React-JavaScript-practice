import React, { useState } from "react";
import "./styles.css";

export default function GetWeekday() {
  const [weekday, setWeekDay] = useState("");
  const [input, setInput] = useState(null);
  const findDay = () => {
    if (!input) return;
    const date = new Date(input);
    const options = { weekday: "long" };
    const dayName = date.toLocaleDateString("en-US", options);
    setWeekDay(dayName);
  }
  return (
    <div className="container">
      <h1>Get Weekday</h1>
      <input
        type="date"
        value={input}
        data-testid="date-input"
        onChange={(e)=>setInput(e.target.value)}
      />
      <button data-testid="find-day-btn" onClick={findDay}>
        Find Day
      </button>
      {weekday && <p data-testid="result" className="result">That date falls on {weekday}.</p>}
    </div>
  );
}
