import React, { useState, useEffect } from 'react';
import '.././css/AddCategory.css'

const AddCategory = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Function to fetch categories from the backend
  const fetchCategories = async () => {
    try {
      // Make API call to fetch categories
      // Replace 'your_backend_api_url' with the actual endpoint to fetch categories
      const response = await fetch('your_backend_api_url');
      if (response.ok) {
        const data = await response.json();
        setCategories(data); // Set categories in state
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // useEffect hook to fetch categories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to handle form submission to add a new category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to add new category
      // Replace 'your_backend_api_url' with the actual endpoint to add a category
      const response = await fetch('your_backend_api_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newCategoryName }),
      });
      if (response.ok) {
        // If successful, fetch categories again to update the list
        fetchCategories();
        // Reset newCategoryName state
        setNewCategoryName('');
      } else {
        console.error('Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className='category'>
      <h2>Add Category</h2>
      {/* Display existing categories */}
      <h3>Existing Categories:</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      
      {/* Form to add new category */}
      <form onSubmit={handleSubmit}>
        <label>
          New Category Name:
          <input 
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        </label>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
