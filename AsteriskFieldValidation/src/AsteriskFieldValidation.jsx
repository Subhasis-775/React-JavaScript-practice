import React, { useState } from 'react';
import "./styles.css";

function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState({name:false,location:false});
  const [success, setSuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: name.trim() === "",
      location: location.trim() === "",
    };
    setError(newErrors);
    if (!newErrors.name && !newErrors.location) {
      setSuccess(`Submitted Successfully!\nName: ${name}\nLocation: ${location}`);
    }
    else {
      setSuccess("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form className="form" data-testid="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
          data-testid="name-input"
            id="name"
            className={`input ${error.name}?"input-error":""`}
            name="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          {error.name && (
          <span className="error" data-testid="name-error">Name is required.</span>
        )}
        </div>
        
        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
          data-testid="location-input"
            id="location"
            className="input"
            name="location"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />
          {error.location && (
            <span className="error" data-testid="location-error">Location is required.</span>
          )}
        </div>
        <button type="submit" className="submit-button"
        data-testid="submit-button">
          Submit
        </button>
        
      </form>
      {success && (
          <div className="success-message" data-testid="success-message">
          <p>{success}</p>
          </div>
          
        )}
    </div>
  );
}

export default AsteriskFieldValidation;
