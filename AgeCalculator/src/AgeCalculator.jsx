import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const calculateAge = () => {
    setError("");
    if (!birthDate) {
      setError("Please select a date");
      setBirthDate(null);
      return;
    }
    const today = new Date(), birth = new Date(birthDate);
    if (birth > today) {
      setError("Birthdate cannot be in the future");
      setBirthDate(null);
      return;
    }
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(), months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
    setResult({ years, months, days });
  }
  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label"
      data-testid="label-birthdate"
      >Enter/Select a birthdate: </label>
      <input id="birthdate" type="date" className="input-date"
      data-testid="input-birthdate"
      value={birthDate}
      onChange={(e)=>setBirthDate(e.target.value)}
      />
      <button className="btn-calc"
      data-testid="btn-calculate"
        onClick={calculateAge}>Calculate Age</button>
      {error && <p className="error-msg" data-testid="error-msg">{error}</p>}
      {result && !error && <p className="age-result" data-testid="age-result">{result.years} years, {result.months} months, {result.days} days</p>}
    </div>
  );
}

export default AgeCalculator;
