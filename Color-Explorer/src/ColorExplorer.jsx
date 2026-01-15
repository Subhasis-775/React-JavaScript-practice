import React, { useState } from "react";
import { colorNameToHex } from "./ColorData.js";
import "./styles.css";

const ColorExplorer = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const changeColor = () => {
    const colorName = input.trim().toLowerCase();
    let hex = colorNameToHex(colorName);
    if (!input) {
      setResult(null);
      return;
    }
    if (hex) {
      setResult({ name: colorName, hex });
      setError("");
    }
    else {
      setError("Sorry, I couldn't recognize that color");
      setResult(null);
    }
  }
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="search-button"
          onClick={changeColor}
        >
          🔍
        </button>
      </div>
      {error && <p data-testid="error-msg" className="error">{error}</p>}
      {result && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: result.hex }}
          ></div>
          <p data-testid="color-name">
            <strong>Name:{result.name}</strong>
          </p>

          <p data-testid="color-hex">
            <strong>Hex:{result.hex}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
