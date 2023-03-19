const MealCard = ({ mealData }) => {
  return (
    <div className="meal-card">
      {mealData.length > 0 ? (
        mealData.map((meal) => <h3 key={meal.strMeal}>{meal.strMeal}</h3>)
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
};

export default MealCard;
