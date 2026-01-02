import { useEffect, useState } from "react";

const storageKey = "savedText";

function AutoSaveInput() {
  const [text, setText] = useState("");

  // Load saved value on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      setText(saved);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem(storageKey, value);
  };

  const handleClear = () => {
    setText("");
    localStorage.removeItem(storageKey);
  };

  return (
    <div>
      <h1>Auto Save Input</h1>

      <input
        data-testid="input-text"   
        type="text"
        value={text}
        onChange={handleChange}
      />

      <button
        data-testid="clear-btn"    
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

export default AutoSaveInput;
