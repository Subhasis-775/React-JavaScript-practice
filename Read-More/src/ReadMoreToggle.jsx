import React, { useState } from "react";
import "./styles.css";

function ReadMoreToggle() {
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;
  const [less, setLess] = useState(false);
  const [result, setResult] = useState(text);
  const readMore = () => {
    if (less == true) {
      let short = '';
      for (let i = 0; i < 100; i++) {
        short += text.charAt(i);
      }
      short += '...';
      setResult(short);
    } else {
      setResult(text);
    }
      setLess(!less);
  }

  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text" data-testid="readmore-text">
      {result}
      </p>
      <button
        className="readmore-button"
        data-testid="readmore-button"
        onClick={readMore}
      >
        {!less ?"Read More":"Read Less"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
