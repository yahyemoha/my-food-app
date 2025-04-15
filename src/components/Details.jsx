import React from 'react';
const Details = ({ meal }) => {
    return (
        <div>
             {/* Så att man kan visa namnet på den valda måltiden */}
            <h2>{ meal.strMeal}</h2>
            {/* bild av maten*/}
            <img src= {meal.strMealThumb} alt={meal.strMeal}/>
            <p><strong>Mer detaljer:</strong></p>
            {/* lite beskrivning/instruktioner för hur man lagar */}
            {meal.strInstructions.split('\r\n').map((str, idx) => (
                <p key={idx}>{str}</p>
            ))}
        </div>
    )
}

export default Details; 