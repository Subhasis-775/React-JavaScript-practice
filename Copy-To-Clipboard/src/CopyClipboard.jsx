import {  useState } from 'react';

function CopyClipboard() {
  const [copied, setCopied] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
    function handleCopy(value) {
      let char = value;
      setError("");
      if(!char.trim()) {
        setError("Type some values to copy");
        return;
      }
      navigator.clipboard.writeText(char);
      setCopied(true);
    }
    setTimeout(()=>setError(""),2000);
  setTimeout(() => setCopied(false), 2000);
  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              value={input}
              data-testid="input-field"
              placeholder="Type Something"
              onChange={(e)=>setInput(e.target.value)}
              
            />
          </label>
          <button
            onClick={()=>handleCopy(input)}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {copied && <p className="message" data-testid="copied-message">Copied</p>}
          {error && (
            <p className="errorMessage" data-testid="error-message">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
