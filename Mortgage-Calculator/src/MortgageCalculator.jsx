import React, { useState } from 'react';
import './styles.css'

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterset, setAnnualInterset] = useState("");
  const [loanTerms, setLoanTerms] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const checkInputs = () => {
    const P = Number(loanAmount);
    const R = Number(annualInterset);
    const T = Number(loanTerms);

    if (isNaN(P) || isNaN(R) || isNaN(T) || P<=0 || R<=0 || T<=0) {
      setError("Invalid input");
      setResult(null);
      return;
    }
    let r = R / 12 / 100;
    let n = T * 12;
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(emi.toFixed(2));
    setError("");
  }
  return (
    <div>
      <label htmlFor="loanAmount">Loan Amount(INR)</label>
      <input
        id="loanAmount"
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <label htmlFor="annualInterest">Annual Interest Rate(%)</label>
      <input
        id="annualInterest"
        type="number"
        value={annualInterset}
        onChange={(e) => setAnnualInterset(e.target.value)}
      />
      <label htmlFor="loanTerms">Loan Terms (Years)</label>
      <input
        id="loanTerms"
        type="number"
        value={loanTerms}
        onChange={(e) => setLoanTerms(e.target.value)}
      />

      <button onClick={checkInputs}>Calculate</button>
      {error && <p aria-label>{error}</p>}
      {result && <p aria-label="result">Monthly Payment: {result}</p>}
    </div>
  );
}

export default MortgageCalculator;