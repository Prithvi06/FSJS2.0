import React from "react";

function MealCard(props){
    return(
        <div className="meal-card">
            <h3>{props.meals.strMeal}</h3>

        </div>
    )
}
export default MealCard