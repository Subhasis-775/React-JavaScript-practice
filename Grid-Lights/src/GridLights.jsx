import { useState } from "react";
import "./styles.css";

const TOTAL = 9;
const GRID_SIZE = 3;

export default function GridLights() {
  const [activeCells, setActiveCells] = useState(new Set());
  const [activationOrder, setActivationOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleClick = (index) => {
    if (isDeactivating || activeCells.has(index)) return;
    const updatedSet = new Set(activeCells);
    updatedSet.add(index);
    const updatedOrder = [...activationOrder, index];
    setActiveCells(updatedSet);
    setActivationOrder(updatedOrder);
    if (updatedSet.size === TOTAL) {
      setTimeout(() => {
        startReverseDeactivation(updatedOrder);
      }, 300);
    }
  };
  const startReverseDeactivation = (order) => {
    setIsDeactivating(true);
    const reverse = [...order].reverse();
    reverse.forEach((idx, i) => {
      setTimeout(() => {
        setActiveCells((prev) => {
          const copy = new Set(prev);
          copy.delete(idx);
          return copy;
        });
        if (i === reverse.length - 1) {
          setTimeout(() => {
            setIsDeactivating(false);
            setActivationOrder([]);
          }, 100);
        }
      }, i * 300);
    })
  };

  const resetGrid = () => {
    // TODO: Implement reset logic
    setActiveCells(new Set());
    setActivationOrder([]);
    setIsDeactivating(false);
  };

  return (
    <div className="main-container">
      <h1 className="grid-title">Grid Lights</h1>

      <div className="button-section">
        <button onClick={resetGrid} data-testid="reset-btn">
          Reset Grid
        </button>
      </div>

      <div className="cinema-hall" data-testid="grid-lights">
        {Array.from({ length: GRID_SIZE }, (_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {Array.from({ length: GRID_SIZE }, (_, colIdx) => {
              const index = rowIdx * GRID_SIZE + colIdx;
              return (
                <div
                  key={index}
                  className={`cell col ${activeCells.has(index)?"active":""}`}
                  onClick={() => handleClick(index)}
                  data-testid={`cell-${index}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
