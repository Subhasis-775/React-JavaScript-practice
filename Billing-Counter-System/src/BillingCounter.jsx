import React, { useState } from "react";
import "./styles.css";

export default function BillingCounter() {
  const [counterCount, setCounterCount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [counters, setCounters] = useState([]);
  const [lastAssigned, setLastAssigned] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const initializeCounters = () => {
    const count = parseInt(counterCount);
    if (isNaN(count) || count <= 0) {
      return;
    }
    setCounters(Array.from({ length: count }, () => []));
    setInitialized(true);
  }
  const handleAdd = () => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      return;
    }
    const totalitemsperCount = counters.map((queue) => queue.reduce((sum, item) => sum + item, 0));
    let counterIndex = totalitemsperCount.findIndex((total) => total === 0);
    if (counterIndex === -1) {
      const minTotal = Math.min(...totalitemsperCount);
      counterIndex = totalitemsperCount.findIndex((total) => total === minTotal);
    }
    const updatedCounters = counters.map((queue, idx) => idx===counterIndex ? [...queue,qty]:queue
    )
    setCounters(updatedCounters);
    setQuantity("");
    setLastAssigned(counterIndex + 1);
  }
  return (
    <div className="billing-container" data-testid="billing-container">
      <h2 data-testid="heading">Billing Counter System</h2>  
      {!initialized ? (
        <div className="input-section" data-testid="counter-input-section">
          <input
            data-testid="counter-input"
            type="number"
            placeholder="Number of counters"
            onChange={(e) => setCounterCount(e.target.value)}
          />
          <button data-testid="set-counter-button" onClick={initializeCounters}>
            Set Counters
          </button>
        </div>
      ) : (
        <>
        <div className="input-section" data-testid="customer-input-section">
          <input
            data-testid="quantity-input"
            type="number"
              placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button data-testid="add-customer-button" onClick={handleAdd} >
           Add Customer
          </button>
          </div>

        {lastAssigned && (
        <div className="assigned-msg" data-testid="assignment-msg">Customer assigned to Counter {lastAssigned}</div>
      )}
      <div>
        {counters.map((queue, index) => (
          <div key={index} className="counter"
            data-testid={`counter-${index}`}>
            <h4 data-testid="counter-heading">Counter {index + 1}</h4>
            <div className="queue" data-testid={`queue-${index}`}>
              {queue.map((qty, idx) => (
                <div 
                  key={idx}
                  className="customer-box"
                  data-testid="customer-box">
              {qty}</div>
            ))}
            </div>
            </div>
      ))}
            </div>
      </>
      )}
        </div>
  );
}
