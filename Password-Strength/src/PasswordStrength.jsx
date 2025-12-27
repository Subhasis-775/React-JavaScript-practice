import React, { useState } from 'react';
import './styles.css'

const checkPasswordStrength = (password) => {
  let n = password.length;
  let count = 0;
  if (!password || password.length === 0) return "Weak Password";
  if (n >= 8) count++;
  let countLowerCase=false;
  let countUppercase=false;
  let countNumbers=false;
  let countSpecial = false;
  for (let i = 0; i < n; i++){
    let ch = password.charCodeAt(i);
    if (ch >= 65 && ch <= 90) countUppercase=true;
    else if (ch >= 97 && ch <= 122) countLowerCase=true;
    else if (ch >= 48 && ch <= 57) countNumbers = true;
    else countSpecial = true;
  }

  if (countLowerCase) count++;
  if (countUppercase) count++;
  if (countNumbers) count++;
  if (countSpecial) count++;
  if (count === 1) return "Level 1";
  if (count === 2 || count === 3) return "Level 2";
  if (count >= 4) return "Level 3"
  return "Weak Password";
};

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const handleCheck = () => {
    let count = checkPasswordStrength(password);
    setResult(count);
  }
  
  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleCheck}>Check Strength</button>
      {result && (<p>Strength: {result}</p>)}
    </div>
  );
};

export default PasswordStrength;