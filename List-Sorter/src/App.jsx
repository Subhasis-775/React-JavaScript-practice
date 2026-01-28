import React from "react";
import ListSorter from "./ListSorter.jsx";
import "./styles.css";

// Default list passed as prop
const defaultFruits = [
  "Banana",
  "Apple",
  "Cherry",
  "Mango",
  "Blueberry",
  "Kiwi",
  "Pineapple",
  "Fig",
];

export default function App() {
  return <ListSorter initialList={defaultFruits} />;
}
