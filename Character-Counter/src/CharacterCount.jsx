import { useState } from "react";


function CharacterCount() {
  const [maxlength, setMaxLength] = useState(50);
  const [text, setText] = useState("");
  const charCount = ((text.length / maxlength) * 100);
  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>

      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number" min="0" max="1000" data-testid="maxlength"
              value={maxlength}
              onChange={(e)=>setMaxLength(Number(e.target.value))}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></textarea>

        <div className="char-info" data-testid="char-info">{text.length} / {maxlength}</div>

        <div className="warnings">
          {(charCount >= 90 && charCount<=100) &&
            <p className="warning-text" data-testid="warning-text">You are close to the limit!</p>
          }
          {charCount>100 &&
          <p className="error-message" data-testid="error-text">Limit exceeded by {text.length-maxlength} characters</p>
          }
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
