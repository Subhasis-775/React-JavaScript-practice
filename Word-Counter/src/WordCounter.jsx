import { useState, useEffect } from "react";

function WordCounter() {
  const [text, setText] = useState("");
  const [count, setCount] = useState([]);

  function handleCount() {
    // Count Logic
    let newText = text.toLowerCase().replace(/[^a-zA-Z\s]/g, "").trim();
    const words = newText.split(/\s+/).filter((word) => word.length > 0);
    const wordMap = new Map();
    for (let i = 0; i < words.length; i++){
      let word = words[i];
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    const sortedArray = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);
    setCount(sortedArray);
  }

  useEffect(() => {
    // Function Call
    handleCount();
    
  }, [text]);
  return (
    <div className="wordCounter">
      <h1>Word Counter</h1>

      <div className="container">
        <textarea
          className="textarea"
          placeholder="Type your text here"
          data-testid="textarea"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        ></textarea>

        {/* Display result on if there are any characters or words */}
        {count.length > 0 && (
          <div className="results">
            <h3>Word Frequencies</h3>
            <ul data-testid="result-list">
              {count.map(([word, count], index) => (
                <li key={word} data-testid={`word-${word}`}>
                  <strong>{word} count</strong>: {count} Times
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default WordCounter;
