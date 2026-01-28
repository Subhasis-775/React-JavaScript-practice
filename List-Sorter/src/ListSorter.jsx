import React, { useState } from "react";
import "./styles.css";

export default function ListSorter({ initialList = [] }) {
  const [order, setOrder] = useState("az");
  const [result, setResult] = useState(initialList);
  const sortList = (type) => {
    let fruits = [...result];
    if (type === "az") {
      fruits.sort((a, b) => a.localeCompare(b));
    }
    else if (type === "za") {
    fruits.sort((a, b) => b.localeCompare(a));      
    }
    else if (type === "length") {
    fruits.sort((a, b) => a.length - b.length);      
    }
    setResult(fruits);
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setOrder(value);
    sortList(value);
  }
  return (
    <div data-testid="container">
      <div>
        <h2> List Sorter</h2>
      </div>
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        data-testid="sort-dropdown"
        value={order}
        onChange={handleChange}
      >     
        <option value="az">A - Z (Alphabetical)</option>
        <option value="za">Z - A (Alphabetical)</option>
        <option value="length">Length (Shortest First)</option>
      </select>
      <ul data-testid="list">
        {result.map((item, index) => (
          <li key={index} data-testid="list-item">{item}</li>
      ))}
      </ul>
    </div>
  );
}
