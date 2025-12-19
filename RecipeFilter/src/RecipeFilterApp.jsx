import React, { useState } from "react";
import "./styles.css"; 
import {recipesData} from "./recipesData.jsx";
const RecipeFilterApp = () => {
  const [rating, setRating] = useState("");
  const [cartCounter, setCartCounter] = useState(0);

  const recipeFilter = () => {
    if (!rating) return recipesData;
    return recipesData.filter((recipe)=>recipe.rating>=Number(rating))
  }
  const calculateAverage = () => {
    const recipeFilter = rating ? recipesData.filter((recipe) => recipe.rating >= Number(rating)) : recipesData;
    let sum = 0;
    if (recipeFilter.length === 0) return 0;
    for (let i = 0; i < recipeFilter.length; i++){
      sum += recipeFilter[i].rating;
    }
    return (sum / recipeFilter.length).toFixed(2);
  }
  const addToCart = () => {
    setCartCounter(prev => prev + 1);
  }
  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>
      <h2 id='addToCart'>Cart Items: {cartCounter}</h2>
      <label htmlFor="rating">Filter by Rating:</label>
      <select
        id='rating'
        value={rating}
        onChange={e=>setRating(e.target.value)}>
        <option value="">Select</option>
        <option value="4.0">4.0+</option>
        <option value="4.3">4.3+</option>
        <option value="4.5">4.5+</option>
        <option value="4.7">4.7+</option>
        <option value="4.9">4.9+</option>
      </select>
      <p id="avgRating">Average Rating: {calculateAverage()}</p>
      <ul className="recipe-list">
  {recipeFilter().map((recipe) => (
    <li key={recipe.id} className="recipe-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        width="200"
      />

      <h3>{recipe.name}</h3>

      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {recipe.rating}</p>
      <p><strong>Reviews:</strong> {recipe.reviewCount}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default RecipeFilterApp;
