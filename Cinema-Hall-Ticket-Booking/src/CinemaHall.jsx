import { useState } from "react";
import "./styles.css";

const ROW = 10,
  COL = 10;

export default function CinemaHall() {
  const [booked, setBooked] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  function getSeatNumber(row, col) {
    return `${String.fromCharCode(65+row)}${col}`
  }
  function selectSeat(seatNumber) {
    if (booked.includes(seatNumber)) return;
    setSelectedSeats((prev) => prev.includes(seatNumber) ? prev.filter((seat) => seat != seatNumber) : [...prev, seatNumber]);
  }
  function bookSeats() {
    if (selectedSeats.length === 0) {
      window.alert("Please select at least one seat");
      return;
    }
    setBooked((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
  }
  function clearSeats() {
    setSelectedSeats([]);
  }
  function reset() {
    setBooked([]);
    setSelectedSeats([]);
  }
  function getSeatClassName(seatNumber) {
    if (booked.includes(seatNumber)) return "disabled-seat";
    if (selectedSeats.includes(seatNumber)) return "selected-seat";
    return "seat";
  }
  return (
    <div className="main-container">
      <h1>Cinema Hall</h1>
      <div className="button-section">
        <button data-testid="book-button" onClick={bookSeats}>
          Book Seats
        </button>
        <button data-testid="clear-button" onClick={clearSeats}>
          Clear
        </button>
        <button data-testid="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="cinema-hall" data-testid="cinema-hall">
        {Array.from({ length: ROW }, (_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {Array.from({ length: COL }, (_, colIdx) => {
              const seatNumber = getSeatNumber(rowIdx, colIdx);
              return (
                <div
                data-testid={`seat-${seatNumber}`}
                  className={`col ${getSeatClassName(seatNumber)}`}
                  key={colIdx} 
                  onClick={() => selectSeat(seatNumber)}>
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
