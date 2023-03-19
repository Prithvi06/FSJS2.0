import React, { useState } from 'react';
import MealCard from './components/Card';

function App() {
  const [mealName, setmealName] = useState('');
  const [mealData, setMealData] = useState([]);

  const handleMealNameChange = (e) => {
    setmealName(e.target.value);
  };

  const searchMeal = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data.meals);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="input-div">
        <form>
          <input
            type="text"
            className="meal-input"
            placeholder="Search your meal"
            onChange={handleMealNameChange}
          />

          <button onClick={searchMeal} className="search-btn">
            Search
          </button>
        </form>
      </div>

      <MealCard mealData={mealData} />
    </>
  );
}

export default App;
