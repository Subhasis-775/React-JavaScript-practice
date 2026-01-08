import React, { useState } from "react";
import './styles.css'

function GuessTheNumber() {
    const guess =()=> Math.floor(Math.random() * 100 )+1;

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(guess());
  const [attempts, setAttempts] = useState(0);
  const handleGuess = () => {
    
    let num = parseInt(input);
    if (isNaN(num) || num < 1 || num > 100) {
      setResult("Please enter a number between 1 and 100.")
      return;
    }
    const newattempts= attempts + 1;
    setAttempts(newattempts);
    if (numberToGuess === num) {
      setResult(`Congratulations! You guessed the number in ${newattempts} attempts.`)
      return;
    }
    else if (numberToGuess > num) {
      setResult("Too low! Try again.");
      return;
    }
    else {
      setResult("Too high! Try again.");
      return;
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNumberToGuess(guess());
    setInput("");
    setResult("");
    setAttempts(0);
    return;
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        id="guess-input"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <div style={{
        display: "flex",
        flexDirection: "row", alignItems: "center", margin: "50px 0"
      }}>
      <button onClick={handleGuess}>Check Guess</button>
      <button onClick={resetGame}>Reset Game</button>
      </div>
      {result && <p>{result}</p>}
    </div>
  );
}

export default GuessTheNumber;
