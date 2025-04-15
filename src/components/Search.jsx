import React, { useState } from 'react';

function Search({ onSearch }) { 
    // State för att hålla koll på vad användaren skriver i sökfältet
    const [query, setQuery] = useState('');
  
     // Att användaren klickar på "Sök"-knappen
    const handleSearch = () => {
      onSearch(query); 
    };

    return (
        <div>
            {/* Inputfält där användaren skriver in vad den vill söka på */}
            <input
                type="text"
                value={query}
                // Uppdaterar state varje gång användaren skriver något
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Sök din fav maträtt..."/>
            <button onClick={handleSearch}>Sök</button>
        </div>
    );
}

export default Search;
