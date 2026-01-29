import React, { useState } from "react";

function Modal() {
  // Step 1: Create a state variable isOpen and setIsOpen using useState
  const [isOpen, setIsOpen] = useState(false);
  // Step 2: Create functions handleOpen and handleClose to toggle modal visibility
  const handleOpen = () => {
    setIsOpen(true);
    console.log("Button clicked")
  }
  const handleClose = () => setIsOpen(false);
  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>

      <button 
        onClick={handleOpen}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div data-testid="modal-backdrop" style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}
          onMouseDown={handleClose}>

          <div style={{ background: "white", padding: "20px", borderRadius: "10px", textAlign: "center", minWidth: "300px", boxShadow: "0 4px 6px rgba(0,0,0,0.2)" }} onMouseDown={(e) => e.stopPropagation()}>
            <h2>Modal Header</h2>
            <p>This is the modal body</p>
          <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
