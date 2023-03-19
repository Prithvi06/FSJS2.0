import React, { useState } from 'react';
import MealCard from './components/Card';

function App() {
  const [mealName, setmealName] = useState("")
  const [mealData, setMealData] = useState({})

  const mealState = (e) => {
      setmealName(e.target.value)
  }
  const searchMeal = (e) => {
    console.log("seach")
    e.preventDefault()
    var url = "www.themealdb.com/api/json/v1/1/search.php?s=" + mealName
    fetch(url)
    .then(response => response.json())
    .then(data => {setMealData(data);console.log(data)})
    .catch(error => console.error(error))
  }


  return (
    <div className='input-div'>
      <form>
        <input type="text" className="meal-input" placeholder="Search your meal" onChange={mealState}/>
        <button onClick={searchMeal} className="search-btn">Search</button>
      </form>

      {mealData && <MealCard mealData={mealData} />}
    </div>

  )
}

export default App;
