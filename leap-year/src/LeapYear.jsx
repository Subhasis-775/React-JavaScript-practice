import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const checkInput = ()=>{
    const trimmed = input.trim();
    if (trimmed == "") {
      setError("Please enter a year");
      setResult("");
      return;
    }
    const year = Number(trimmed);
    if (isNaN(year)) {
      setError("Please enter a valid year");
      setResult("");
      return;
    }
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      setResult(`${year} is a Leap Year`)
    }
    else {
      setResult(`${year} is not a Leap Year`);
     }
    setError("");
  }
  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        value={input}
        onChange={((e)=>setInput(e.target.value))}
      />

      <button data-testid="check-btn"
      onClick={checkInput}
      >
        Check
      </button>
      {error && <p data-testid="error-msg" className="error">{error}</p>}
      {result && <p data-testid="result" className="result">{result}</p>}
    </div>
  );
}
