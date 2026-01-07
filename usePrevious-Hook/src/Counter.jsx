import { useState } from "react";
import usePrevious from "./UsePrevious.jsx";

export default function Counter() { 
  const [currentCount, setCurrentCount] = useState(0);
  const previous = usePrevious(currentCount);
  const increment = () => {
        setCurrentCount(prev => prev + 1);
    } 
    const decrement = () => {
      setCurrentCount(prev => prev - 1);
    }
  const reset=() => {
    setCurrentCount(0);
    }
  return (
    <div className="App">
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previous}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
