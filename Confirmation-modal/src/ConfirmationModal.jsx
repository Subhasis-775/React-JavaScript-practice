import React, { useState } from 'react';
import "./styles.css";

function ConfirmationModal() {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState("");
  const visibilityState = () => {
    setVisible(true);
  }
  const ConfirmState = () => {
    setResult("Confirmed");
    setVisible(false);
  };
  const cancelState = () => {
    setResult("Cancelled");
    setVisible(false);
  }
  return (
    <div className="modal-container">
      <button className="open-modal-btn"
      data-testid="open-modal-button"
      onClick={visibilityState}
      >Open Confirmation Modal</button>
      {visible &&
        <div className="modal-backdrop" data-testid="confirmation-modal">
          <div className="modal-box">
            <h2 className="modal-title" data-testid="modal-title">Confirm Action</h2>
            <p className="modal-message" data-testid="modal-message">Are you sure you want to proceed?</p>

            <div className="modal-buttons">
              <button className="confirm-btn" data-testid="confirm-button" onClick={ConfirmState}>Confirm</button>
              <button className="cancel-btn" data-testid="cancel-button" onClick={cancelState}>Cancel</button>
            </div>
          </div>
        </div>
      }
      <div className="action-status" data-testid="action-status">{result}</div>
    </div>
  );
}

export default ConfirmationModal;
