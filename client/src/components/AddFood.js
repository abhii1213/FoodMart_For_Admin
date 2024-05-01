import React, { useState, useEffect } from 'react';
import '../css/AddFood.css'

const AddFood = () => {
  const [foods, setFoods] = useState([]);

  // Function to fetch foods from the backend
  const fetchFoods = async () => {
    try {
      // Make API call to fetch foods
      // Replace 'your_backend_api_url' with the actual endpoint to fetch foods
      const response = await fetch('your_backend_api_url');
      if (response.ok) {
        const data = await response.json();
        setFoods(data); // Set foods in state
      } else {
        console.error('Failed to fetch foods');
      }
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  // useEffect hook to fetch foods when component mounts
  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="container">
      <h2>All Foods</h2>
      <div className="foods">
        {foods.map(food => (
          <div key={food.name} className="food">
            <img src={food.img} alt={food.name} />
            <div className="food-details">
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <p>Category: {food.CategoryName}</p>
              <p>Options: {food.options.map(option => `Half: ${option.half}, Full: ${option.full}`).join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddFood;
