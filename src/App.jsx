import React, { useState } from 'react';  
import Search from "./components/search";
import Details from "./components/details";
import './index.css'; 

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
    // Om ingen måltid hittas kommer det stå felmeddelande
  const [error, setError] = useState('');

   // För att söka efter måltider via API:t
  const searchMeals = async (query) => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();

      if (data.meals) {
        setMeals(data.meals);
        setError('');
      } else {
        // Visa ett meddelande och töm listan
        setMeals([]);
        setError('Inga mat hittades.');
      }
    } catch (error) {
      console.error('Fel vid hämtning:', error);
      // Vi loggar felet i konsolen men visar inget meddelande till användaren
    }
  };

  return (
    <div className="center-container">
      <h1>Maträtten</h1>
      <Search onSearch={searchMeals} />

      {/* Visar felmeddelande om något är fel eller inget hittades */}
      {error && <p className="error-message">{error}</p>}

      {selectedMeal && <Details meal={selectedMeal} />}
      <ul>
        {/* Lista med alla måltider vi har fått från API:t */}
        {meals.map((meal) => (
          <li key={meal.idMeal} onClick={() => setSelectedMeal(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>

    
  
    </div>
  );
}

export default App;