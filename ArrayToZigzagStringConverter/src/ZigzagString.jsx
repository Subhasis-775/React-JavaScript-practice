import React, { useState } from "react";

const ZigzagString = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const checkInput = () => {
    const trimmed = input.trim();
    if (trimmed === "") {
      setOutput("");
      return;
    }
    const arr = input.split(",").map((e) => e.trim());
    let result = "";
    for (let i = 0; i < arr.length; i++){
      if (i % 2 == 0) result += arr[i];
      else result += arr[i].split("").reverse().join("");
    }
    setOutput(result);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        onChange={(e)=>setInput(e.target.value)}
      />
      <button data-testid="submit-button"
      onClick={checkInput}
      >
        Submit
      </button>

      <p data-testid="output-result">Output: {output}</p>
    </div>
  );
}  

export default ZigzagString;
