import React, { useState } from "react";
import './styles.css'
function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [value, setValue] = useState("");
  const makeid=() =>Date.now().toString(32) + Math.floor(Math.random() * 1000 + 1);
  const handleKeyown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = value.trim();
      if (trimmed === "") {
        setValue("");
        return;
      }
      const newChip = { id: makeid(), label: trimmed }
      setChips(prev => [...prev, newChip]);
      setValue("");
    }
  };
  const deleteChips = (chipsId) => {
    setChips(prev=>prev.filter((c)=>c.id!==chipsId))
  }
  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyown}
      />
      <div>
        {chips.map((chip) => (
          <div key={chip.id}>
            <span>{chip.label}</span>
            <button 
              onClick={()=>deleteChips(chip.id)}
            >X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;