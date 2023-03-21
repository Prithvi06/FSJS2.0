const MealCard = ({ mealData }) => {
  return (
    <div className="meal-card">
      {mealData.length > 0 ? (
        mealData.map((meal) => <div className="card" key={meal.strMeal}>
                  <img src={meal.strMealThumb} className="mealtheme" alt="meal thumb"></img>
                  <div className="meal-info">
                    <h3>Meal Name:</h3>
                    <p><b>{meal.strMeal}</b></p>
                  </div>
                  <div className="meal-info">
                    <h3>Category:</h3>
                    <p><b>{meal.strCategory}</b></p>
                  </div>
                </div>
              )
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
};

export default MealCard;
